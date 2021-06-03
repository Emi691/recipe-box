import React, { Component } from 'react'

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