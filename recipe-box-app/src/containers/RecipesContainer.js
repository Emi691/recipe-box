import React, { Componenent } from 'react'

class RecipesContainer extends Componenent {

    render(){
        return(
            <div>
                <p>RecipesContainer</p>
                <RecipeInput/>
                <Recipes/>
            </div>
        )
    }
}

export default RecipesContainer