class HanziPart < ApplicationRecord
  belongs_to :hanzi
  belongs_to :part
end
