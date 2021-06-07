import React, {Component} from 'react'
import IngredientsContainer from '../containers/IngredientsContainer'

class FullRecipe extends Component {
    render() {
        return (
        <div>
            <img src={props.image} alt="Image not Found"/>
            <h3>{props.title}</h3>
            <h4>Instructions: </h4>
            <p>{props.instructions}</p>
            <h4>Ingredients: </h4>
            <IngredientsContainer ingredients = {ingredients}/>
        </div>
        )
    }
    
}

export default FullRecipe