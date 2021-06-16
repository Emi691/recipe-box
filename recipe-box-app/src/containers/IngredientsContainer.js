import React, { Component } from 'react'
import Ingredients from '../components/Ingredients' 

class IngredientsContainer extends Component {

    render() { 
        return (
            <Ingredients ingredients={this.props.ingredients}/>
        )
    }
}

export default IngredientsContainer