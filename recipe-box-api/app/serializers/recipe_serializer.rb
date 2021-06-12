class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :instructions, :photo, :user_id 
  has_many :ingredients
end
