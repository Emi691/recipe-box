import React from 'react'
import { Card } from 'react-bootstrap'

const Recipe = (props) => (
    <Card style={{ width: '200px'}}>
        <Card.Img variant='top' src={props.photo} alt="Image not Found"/>
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        </Card.Body>
    </Card>
)

export default Recipe