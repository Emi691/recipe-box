import React, { Component } from 'react'
import Ingredients from '../components/Ingredients' 

class IngredientsContainer extends Component {

    render() { 
        console.log(this.props.ingredients)
        return (
           
            <div>
                <p>IngredientsContainer</p>
                <Ingredients ingredients = {this.props.ingredients}/>
            </div>
        )
    }
}

export default IngredientsContainer