class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :instructions, :photo, :user_id
end
