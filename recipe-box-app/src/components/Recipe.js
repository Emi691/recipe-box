import React from 'react'
import IngredientsContainer from '../containers/IngredientsContainer'

const Recipe = (props) => (
    <card>
        <h3>{props.title}</h3>
        <p>{props.instructions}</p>
        <IngredientsContainer /> 
    </card>
)

export default Recipe