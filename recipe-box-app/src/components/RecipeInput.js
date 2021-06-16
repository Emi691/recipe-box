import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe } from '../actions/addRecipe'

class RecipeInput extends Component {
    state = {
            title: '',
            instructions: '',
            photo: '',
            user_id: localStorage.getItem("userId"),  
            ingredients: [{
                name: '',
                amount: ''
            }],
        }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addRecipe(this.state)
    }
    

    renderIngredientForm(index) {
        return(
            <>
            <br/>
            <label>Name: </label>
            <input type="text" name="name" onChange={event => this.handleIngredientChange(event, index)} value={this.state.ingredients[index].name}/>
            <br/>
            <label>Amount: </label>
            <input type="text" name="amount" onChange={event => this.handleIngredientChange(event, index)} value={this.state.ingredients[index].amount}/>
            <br/>
            <button onClick={event => this.removeIngredient(index)}>
               Remove Ingredient
            </button>
            <br/>    
            </>
        ) 
    }

    handleIngredientChange(event, index) {
        let ingredient = {
            [event.target.name]: event.target.value
        }

        this.setState({
            ingredients: this.state.ingredients.map((ing, i) => i === index ? {...ing, ...ingredient} : ing )
        })
    }

    addIngredient() {
      this.setState({
          ingredients: [...this.state.ingredients, {name: '', amount: ''}]
      })
    }

    removeIngredient(index) {
        this.setState({
            ingredients: [...this.state.ingredients.filter((ingredient, i) => i !== index )]
        })
    }

    render() {
        return (
            <div>
            <h4>Add Recipe</h4>
            <form onSubmit={event => this.handleSubmit(event)}>
                <div>
                    <label>Title: </label>
                    <input type="text" name="title" onChange={event => this.handleChange(event)} value={this.state.title}/>
                <br/>
                    <label>Instructions: </label>
                    <input type="textarea" name="instructions" onChange={event => this.handleChange(event)} value={this.state.instructions}/>
                <br/>
                    <label>Photo Url: </label>
                    <input type="rext" name="photo" onChange={event => this.handleChange(event)} value={this.state.photo}/>
                </div>
                <br/>
                <div className="ingredients">
                    <h5>Ingredients:</h5>
                    {this.state.ingredients.map((ingredient, index) => this.renderIngredientForm(index))}
                    <br/>
                    <button type="button" onClick={event => this.addIngredient()}>
                       Add Ingredient
                    </button>
                </div>
                <br/>
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