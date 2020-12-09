class KanjiSerializer
  include FastJsonapi::ObjectSerializer
  attributes :char, :meaning, :story, :number, :parts
  has_many :parts
end
