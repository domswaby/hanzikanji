class Hanzi < ApplicationRecord
  has_many :hanzi_parts
  has_many :parts, through: :hanzi_parts
end
