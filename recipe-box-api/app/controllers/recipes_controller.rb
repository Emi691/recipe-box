class RecipesController < ApplicationController

    def index
        recipes = Recipe.all 
        render json RecipeSerializer.new(recipes)
    end

    def show
        recipe = Recipe.find_by(title: recipe_params.title)
        render json RecipeSerializer.new(recipe)
    end

    def create
        recipe = Recipe.create(recipe_params)
        if recipe.valid?
            render json RecipeSerializer.new(recipe)
        else
            remder json { message: 'Failed to create recipe'}
        end
    end

    def update
        recipe = Recipe.find_by(id: recipe_params.id)
        if recipe.update(recipe_params)
            render json RecipeSerializer.new(recipe)
        else
            render json { message: 'Failed to update recipe'}
        end  
    end

    def delete
        recipe = Recipe.find_by(id: recipe_params.id)
        recipe.destroy
        render json { message: 'Recipe successfuly deleted' }
    end

    private

    def recipe_params
        params.require(:recipe).permit(:title, :instructions, :photo)
    end
end