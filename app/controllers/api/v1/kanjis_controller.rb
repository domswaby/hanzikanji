module Api
  module V1
    class KanjisController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        kanjis = Kanji.all
        render json: KanjiSerializer.new(kanjis, options).serialized_json
      end

      def show
        kanji = Kanji.find_by(number: params[:num])
        render json: KanjiSerializer.new(kanji, options).serialized_json
      end

      def page
        #  *** calculating the right pageNumber for some kanji and the corresponding first_kanji_number on that page ***
        pageNumber = params[:num].to_i
        first_kanji = (pageNumber * 50) - 49
        last_kanji = pageNumber * 50
        kanjis = Kanji.where(number: first_kanji..last_kanji).order(:number)
        render json: KanjiSerializer.new(kanjis, options).serialized_json
      end

      def search
        #  *** calculating the right pageNumber for some kanji and the corresponding first_kanji_number on that page ***
        target = params[:target]
        target_type = params[:type]
        kanjis = if target_type == 'num'
                   Kanji.where(number: target.to_i).order(:number)
                 elsif target_type == 'char'
                   Kanji.where(char: target).order(:number)
                 elsif target_type == 'story'
                   Kanji.where("story like ?", "%#{target}%").limit(500).order(:number)

                 else
                   Kanji.where(meaning: target).order(:number)
                 end
        render json: KanjiSerializer.new(kanjis, options).serialized_json
      end

      private

      def kanji_params
        params.require(:num)
        params.require(:type)
        params.require(:target)
      end

      def options
        @options ||= { include: %i[parts] }
        # maybe change to [kanji_parts]
      end
    end
  end
end
