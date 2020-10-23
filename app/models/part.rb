class Part < ApplicationRecord
  has_many :kanji_parts
  has_many :kanjis, through: :kanji_parts

  has_many :hanzi_parts
  has_many :hanzis, through: :hanzi_parts
end
