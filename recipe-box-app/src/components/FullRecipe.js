import React, { Component } from 'react'
import { connect } from 'react-redux'
import IngredientsContainer from '../containers/IngredientsContainer'

class FullRecipe extends Component {
    
    renderRecipe = () => {

        if (!!this.props.recipe) {
            return (
                <div>
                <p>full recipe</p>
                <img src={this.props.recipe.image} alt="Image not Found"/>
                <h3>{this.props.recipe.title}</h3>
                <h4>Instructions: </h4>
                <p>{this.props.recipe.instructions}</p>
                <h4>Ingredients: </h4>
                <IngredientsContainer ingredients = {this.props.ingredients}/> 
                </div>
            )
        } else {
            return (
                <div>
                    <br/>
                    <p>Recipe not found! </p>
                </div>
                
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderRecipe()}
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    return { 
        recipe: state.recipes.recipes.find(recipe => recipe.id === ownProps.match.params.recipeID), 
        ingredients: state.ingredients.filter(ingredient => ingredient.recipeId === ownProps.match.params.recipeID)
    }
}
export default connect(mapStateToProps)(FullRecipe)