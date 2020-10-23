module Api
  module V1
    class KanjisController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        kanjis = Kanji.all
        render json: KanjiSerializer.new(kanjis, options).serialized_json
      end

      def show
        kanji = Kanji.find_by(number: params[:number])

        render json: KanjiSerializer.new(kanji, options).serialized_json
      end


      private

      def kanji_params
        params.require(:number)
      end

      def options
        @options ||= { include: %i[parts]}
        # maybe change to [kanji_parts]
      end
    end
  end
end
