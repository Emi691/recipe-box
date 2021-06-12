import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/fetchRecipes'
import { fetchIngredients } from '../actions/fetchIngredients'
import RecipeInput from '../components/RecipeInput'
import Recipes from '../components/Recipes'

class RecipesContainer extends Component {
    
    componentDidMount() {
        this.props.fetchRecipes()
        this.props.fetchIngredients()
    }

    render() {
        return(
            <div>
                <br/>
                <RecipeInput />
                <Recipes recipes={this.props.recipes} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipes: () => dispatch(fetchRecipes()),
        fetchIngredients: () => dispatch(fetchIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)