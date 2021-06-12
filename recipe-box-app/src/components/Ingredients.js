import React, { Component } from 'react'
import Ingredient from './Ingredient'

class Ingredients extends Component {

    renderIngredients() {
        return this.props.ingredients.map(ingredient => <Ingredient key={ingredient.id} name={ingredient.name} amount={ingredient.amount}/>)
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