class IngredientsController < ApplicationController

    def index
        ingredients = Ingredient.all 
        render json IngredientSerializer.new(ingredients)
    end

    def show
        ingredient = Ingredient.find_by(name: ingredient_params.name)
        render json IngredientSerializer.new(ingredient)
    end

    def create
        ingredient = Ingredient.create(ingredient_params)
        if ingredient.valid?
            render json IngredientSerializer.new(ingredient)
        else
            remder json { message: 'Failed to create ingredient'}
        end
    end
end
