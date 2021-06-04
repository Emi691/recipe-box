import React, { Component } from 'react'
import Recipe from './Recipe'

class Recipes extends Component {
    
    renderRecipe = () => this.props.recipes.map(recipe => <Recipe key={recipe.id} title={recipe.title} instructions={recipe.instructions} />)

    render() {
        console.log(this.props)
        return (
            <div>
                {this.renderRecipe()}
            </div>
        )
    }
}

export default Recipes