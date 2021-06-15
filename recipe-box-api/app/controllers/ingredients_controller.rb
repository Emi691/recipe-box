class IngredientsController < ApplicationController

    def index
        ingredients = Ingredient.all 
        render json: IngredientSerializer.new(ingredients)
    end

    def show
        ingredient = Ingredient.find_by(id: params[:id])
        render json: IngredientSerializer.new(ingredient)
    end

    def create
        ingredient = Ingredient.create(ingredient_params)
        if ingredient.valid?
            render json: IngredientSerializer.new(ingredient)
        else
            render json: { message: 'Failed to create ingredient'}
        end
    end

    def update
        ingredient = Ingredient.find_by(id: ingredient_params.id)
        if ingredient.update(ingredient_params)
            render json: IngredientSerializer.new(ingredient)
        else
            render json: { message: 'Failed to update ingredient'}
        end  
    end

    def destroy
        ingredient = Ingredient.find_by(id: ingredient_params.id)
        ingredient.destroy
        render json: { message: 'Ingredient successfuly deleted' }
    end

    private

    def ingredient_params
        params.require(:ingredient).permit(:name, :amount, :id)
    end
end
