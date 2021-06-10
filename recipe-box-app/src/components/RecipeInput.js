import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe } from '../actions/addRecipe'

let ingredientsArray = []

class RecipeInput extends Component {
    state = {
        title: '',
        instructions: '',
        photo: '',
        ingredients: [],
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    

    renderIngredientForms() {
        let ingredientForm = (
            <>
            <label>Name: </label>
            <input type="text" name="name" onChange={event => this.handleChange(event)} value={this.state.name}/>
            <br/>
            <label>Amount: </label>
            <input type="text" name="amount" onChange={event => this.handleChange(event)} value={this.state.amount}/>
            <br/>
            <button onClick={event => this.RemoveIngredient()}>
               Remove Ingredient
            </button>    
            </>
        ) 
        ingredientsArray.push(ingredientForm)
        console.log(ingredientsArray)
        return ingredientsArray.map((ingredient) => <div>{ingredient}</div>)
    }

    addIngredient() {
      this.renderIngredientForms()
      this.setState({...this.state})
    }

    render() {
        console.log(this.state.amount)
        return (
            <div>
            <h4>Add Recipe</h4>
            <form onSubmit={event => this.handleSubmit(event)}>
                <div>
                    <label>Title: </label>
                    <input type="text" name="title" onChange={event => this.handleChange(event)} value={this.state.title}/>
                </div><br/>
                <div>
                    <label>Instructions: </label>
                    <input type="textarea" name="instructions" onChange={event => this.handleChange(event)} value={this.state.instructions}/>
                </div><br/>
                <div>
                    <label>Photo Url: </label>
                    <input type="rext" name="photo" onChange={event => this.handleChange(event)} value={this.state.photo}/>
                </div>
                <div className="ingredients">
                    <h5>Ingredients:</h5>
                    {this.renderIngredientForms()}
                    <br/>
                    <button onClick={event => this.addIngredient()}>
                       Add Ingredient
                    </button>
                </div>
                <input type="submit" value="Create Recipe"/> 
            </form>
            <br/>  
            </div>  
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRecipe: (recipe) => dispatch(addRecipe(recipe))
    }
}

export default connect(null, mapDispatchToProps)(RecipeInput)