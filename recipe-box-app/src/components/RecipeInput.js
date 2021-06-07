import React, { Component } from 'react'

class RecipeInput extends Component {
    state = {
        title: '',
        insructions: '',
        photo: '' 
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state) 
    }

    render() {
        return (
            <form>
                <div>
                    <label>Title: </label>
                    <input type="text" name="title" onChange={event => this.handleChange(event)} value={this.state.title}/>
                </div><br/>
                <div>
                    <label>Instructions: </label>
                    <input type="text" name="instructions" onChange={event => this.handleChange(event)} value={this.state.instructions}/>
                </div><br/>
                <div>
                    <label>Photo Url: </label>
                    <input type="password" name="photo" onChange={event => this.handleChange(event)} value={this.state.photo}/>
                </div>
                <input type="submit" value="Add Recipe"/>    
            </form>    
        )
    }
}

export default RecipeInput