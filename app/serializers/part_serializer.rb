class PartSerializer
  include FastJsonapi::ObjectSerializer
  attributes :part, :meaning
end
