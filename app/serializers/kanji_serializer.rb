class KanjiSerializer
  include FastJsonapi::ObjectSerializer
  attributes :kanji, :meaning, :story, :number, :parts

  has_many :parts
end
