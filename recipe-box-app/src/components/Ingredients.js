import React, { Component } from 'react'
import Ingredient from './Ingredient'

class Ingredients extends Component {

    renderIngredients() {
        this.props.ingredients.map(ingredient => <li><Ingredient key={ingredient.id} name={ingredient.name} amount={ingredient.amount}/></li>)
    }

    render() {
        return (
            <ul>
                {this.renderIngredients()}
            </ul>
        )
    }
}

export default Ingredients