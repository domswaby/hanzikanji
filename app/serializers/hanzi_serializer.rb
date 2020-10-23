class HanziSerializer
  include FastJsonapi::ObjectSerializer
  attributes :hanzi, :meaning, :story, :number
end
