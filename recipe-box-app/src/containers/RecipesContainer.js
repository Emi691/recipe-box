import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchRecipes from '../actions/fetchRecipes'
import RecipeInput from '../components/RecipeInput'
import Recipes from '../components/Recipes'

class RecipesContainer extends Component {

    render() {
        return(
            <div>
                <p>RecipesContainer</p>
                <RecipeInput />
                <Recipes />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipes: () => dispatch(fetchRecipes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)