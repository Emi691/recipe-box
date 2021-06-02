class IngredientsController < ApplicationController

    def index
        ingredients = Ingredient.all 
        render json IngredientSerializer.new(ingredients)
    end

    def show
        ingredient = Ingredient.find_by(name: ingredient_params.name)
        render json IngredientSerializer.new(ingredient)
    end
end
