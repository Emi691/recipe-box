import React, { Component } from 'react'
import RecipeInput from '../components/RecipeInput'
import Recipes from '../components/Recipes'

class RecipesContainer extends Component {

    render() {
        return(
            <div>
                <p>RecipesContainer</p>
                <RecipeInput />
                <Recipes />
            </div>
        )
    }
}

export default RecipesContainer