import React, { Component } from 'react'
import { connect } from 'react-redux'
import IngredientsContainer from '../containers/IngredientsContainer'

class FullRecipe extends Component {

    componentDidMount = () => {
        if (!localStorage.getItem("token")) {
            this.props.history.push('/login')
        }
    }

    renderRecipe = () => {
        let recipe = this.props.recipes.find(recipe => recipe.id === this.props.match.params.recipeId)
        if (recipe) {
            return (
                <div>
                <br/>
                <img src={recipe.photo} alt="Image not Found" height="500px"/>
                <h3>{recipe.title}</h3>
                <h4>Instructions: </h4>
                <p>{recipe.instructions}</p>
                <h4>Ingredients: </h4>
                <IngredientsContainer ingredients = {this.props.ingredients.filter(ingredient => ingredient.recipe_id === this.props.match.params.recipeId)}/> 
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

const mapStateToProps = (state) => {
    return { 
        recipes: state.recipes.recipes, 
        ingredients: state.ingredients
    }
}
export default connect(mapStateToProps)(FullRecipe)