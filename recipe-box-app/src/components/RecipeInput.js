import React, { Component } from 'react'
import { connect } from 'react-redux'
import IngredientInput from './IngredientInput'
import { addRecipe } from '../actions/addRecipe'

class RecipeInput extends Component {
    state = {
        title: '',
        instructions: '',
        photo: '',
        name: '',
        amount: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let recipe = {recipe: {title: this.state.tile, instructions: this.state.instructions, photo: this.state.photo}, ingredient_attributes: {name: this.state.name, amount: this.state.amount}}
        this.props.addRecipe(recipe) 
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
                <label>Igredients:</label>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" onChange={event => this.handleChange(event)} value={this.state.name}/>
                </div>
                <br/>
                <div>
                    <label>Amount: </label>
                    <input type="text" name="amount" onChange={event => this.handleChange(event)} value={this.state.amount}/>
                </div>
                <input type="submit" value="Add Recipe"/> 
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