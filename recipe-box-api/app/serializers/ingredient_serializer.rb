class IngredientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :amount, :recipe_id
end
