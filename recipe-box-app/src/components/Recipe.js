import React from 'react'
import { Card } from 'react-bootstrap'
import IngredientsContainer from '../containers/IngredientsContainer'

const Recipe = (props) => (
    <Card style={{ width: '800px'}}>
        <Card.Img variant='top' src={props.image} alt="Image not Found"/>
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>Instructions</Card.Subtitle>
        <Card.Text>{props.instructions}</Card.Text>
        <IngredientsContainer /> 
        </Card.Body>
    </Card>
)

export default Recipe