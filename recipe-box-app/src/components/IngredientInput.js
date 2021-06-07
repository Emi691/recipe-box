import React, { Component } from 'react'

class IngredientInput extends Component {
    state = {
        name: '',
        amount: ''         
    }

    render() {
        return (
            <form>
                    <label>Name: </label>
                    <input type="text" name="name" onChange={event => this.props.handleChange(event)} value={this.state.name}/>
                <br/>
                    <label>Amount: </label>
                    <input type="text" name="amount" onChange={event => this.props.handleChange(event)} value={this.state.amount}/>
            </form>
        )
    }
        
}

export default IngredientInput