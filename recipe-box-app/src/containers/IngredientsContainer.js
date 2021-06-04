import React, { Component } from 'react'
import IngredientInput from '../components/IngredientInput'
import Ingredients from '../components/Ingredients' 

class IngredientsContainer extends Component {

    render() {
        return (
            <div>
                <p>IngredientsContainer</p>
                <IngredientInput />
                <Ingredients />
            </div>
        )
    }
}

export default IngredientsContainer