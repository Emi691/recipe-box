import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/fetchRecipes'
import { fetchIngredients } from '../actions/fetchIngredients'
import { deleteRecipe } from '../actions/deleteRecipe'
import RecipeInput from '../components/RecipeInput'
import Recipes from '../components/Recipes'

class RecipesContainer extends Component {
    
    componentDidMount() {
        this.props.fetchRecipes()
        this.props.fetchIngredients()
    }

    componentDidUpdate = () => {
        if (!localStorage.getItem("token")) {
            this.props.history.push('/login')
        }
    }

    handleDelete = (id) => {
        this.props.deleteRecipe(id)
    }

    render() {
        return(
            <div>
                <br/>
                <RecipeInput />
                <Recipes recipes={this.props.recipes} handleDelete={this.handleDelete} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes.recipes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipes: () => dispatch(fetchRecipes()),
        fetchIngredients: () => dispatch(fetchIngredients()),
        deleteRecipe: (id) => dispatch(deleteRecipe(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)