import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Recipe = (props) => (
    <Card style={{ width: '200px'}}>
        <Card.Img variant='top' src={props.photo} alt="Image not Found"/>
        <Card.Body>
        <Link to={`/recipes/${props.id}`}>{props.title}</Link>
        <br/>
        <button onClick={props.handleDelete} >delete</button>
        </Card.Body>
    </Card>
)

export default Recipe