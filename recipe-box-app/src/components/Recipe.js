import React from 'react'
import IngredientsContainer from '../containers/IngredientsContainer'

const Recipe = () => (
    <card>
        <h3>{this.props.title}</h3>
        <p>{this.props.instructions}</p>
        <IngredientsContainer /> 
    </card>
)

export default Recipe