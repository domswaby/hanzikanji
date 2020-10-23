class KanjiSerializer
  include FastJsonapi::ObjectSerializer
  attributes :kanji, :meaning, :story, :number

  has_many :parts
end
