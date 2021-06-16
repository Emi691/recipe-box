import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

class Recipe extends Component {
    render () {
        if (parseInt(localStorage.getItem('userId')) === parseInt(this.props.user_id)) {
            return (
                <Card style={{ width: '200px'}}>
                    <Card.Img variant='top' src={this.props.photo} alt="Image not Found"/>
                    <Card.Body>
                    <Link to={`/recipes/${this.props.id}`}>{this.props.title}</Link>
                    <br/>
                    <button onClick={event => this.props.handleDelete(this.props.id)} >delete</button>
                    </Card.Body>
                </Card>
        )} else {
            return (
                <Card style={{ width: '200px'}}>
                    <Card.Img variant='top' src={this.props.photo} alt="Image not Found"/>
                    <Card.Body>
                    <Link to={`/recipes/${this.props.id}`}>{this.props.title}</Link>
                    </Card.Body>
                </Card>
            )
        }

    }
}

export default Recipe