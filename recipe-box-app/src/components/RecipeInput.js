import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe } from '../actions/addRecipe'

class RecipeInput extends Component {
    state = {
        title: '',
        instructions: '',
        photo: '' 
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

    render() {
        return (
            <div>
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