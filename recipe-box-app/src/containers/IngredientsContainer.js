import React, { Component } from 'react'
import Ingredients from '../components/Ingredients' 

class IngredientsContainer extends Component {

    render() { 
        console.log(this.props.ingredients)
        return (
            <Ingredients ingredients={this.props.ingredients}/>
        )
    }
}

export default IngredientsContainer