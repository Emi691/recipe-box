import React, {Component} from 'react'
import IngredientsContainer from '../containers/IngredientsContainer'

class FullRecipe extends Component {
    render() {
        return (
        <div>
            <img src={image} alt="Image not Found"/>
            <h3>{title}</h3>
            <h4>Instructions: </h4>
            <p>{instructions}</p>
            <h4>Ingredients: </h4>
            <IngredientsContainer ingredients = {ingredients}/>
        </div>
        )
    }
    
}

export default FullRecipe