import React, { Component } from 'react'
import Recipe from './Recipe'

class Recipes extends Component {
    
    renderRecipe = () => this.props.recipes.map(recipe => <Recipe key={recipe.id} id={recipe.id} title={recipe.title} photo={recipe.photo} />)

    render() {
        console.log(this.props)
        return (
            <div className="recipesContainer">
                    {this.renderRecipe()}
            </div>
        )
    }
}

export default Recipes