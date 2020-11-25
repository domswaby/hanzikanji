class HanziSerializer
  include FastJsonapi::ObjectSerializer
  attributes :hanzi, :meaning, :story, :number, :parts
  has_many :parts
end
