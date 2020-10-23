class Kanji < ApplicationRecord
  has_many :kanji_parts
  has_many :parts, through: :kanji_parts
end
