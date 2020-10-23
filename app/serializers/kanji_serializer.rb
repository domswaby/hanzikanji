class KanjiSerializer
  include FastJsonapi::ObjectSerializer
  attributes :kanji, :meaning, :story, :number
end
