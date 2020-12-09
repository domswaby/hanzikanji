class ThanziSerializer
  include FastJsonapi::ObjectSerializer
  attributes :char, :meaning, :story, :number
end
