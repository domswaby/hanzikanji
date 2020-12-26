module Api
  module V1
    class HanzisController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        hanzis = Hanzi.all
        render json: HanziSerializer.new(hanzis, options).serialized_json
      end

      def show
        hanzi = Hanzi.find_by(number: params[:num])
        render json: HanziSerializer.new(hanzi, options).serialized_json
      end

      def page
        #  *** calculating the right pageNumber for some kanji and the corresponding first_kanji_number on that page ***
        pageNumber = params[:num].to_i
        first_hanzi = (pageNumber * 50) - 49
        last_hanzi = pageNumber * 50
        hanzis = Hanzi.where(number: first_hanzi..last_hanzi).order(:number)
        render json: HanziSerializer.new(hanzis, options).serialized_json
      end


      private

      def hanzi_params
        params.require(:num)
      end

      def options
        @options ||= { include: %i[parts]}
        # maybe change to [kanji_parts]
      end
    end
  end
end
