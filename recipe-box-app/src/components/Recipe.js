import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

class Recipe extends Component {
    state= {
        counter: 0
    }

    handleLike = (event) => {
        this.setState({
            counter: this.state.counter + 1
        })
    }


    render () {
        if (parseInt(localStorage.getItem('userId')) === parseInt(this.props.user_id)) {
            return (
                <Card style={{ width: '200px'}}>
                    <Card.Img variant='top' src={this.props.photo} alt="Image not Found"/>
                    <Card.Body>
                    <Link to={`/recipes/${this.props.id}`}>{this.props.title}</Link>
                    <br/>
                    <button onClick={event => this.props.handleDelete(this.props.id)} >delete</button>
                    <br/>
                    <button onClick={event => this.handleLike(event)}>likes {this.state.counter} </button>
                    </Card.Body>
                </Card>
        )} else {
            return (
                <Card style={{ width: '200px'}}>
                    <Card.Img variant='top' src={this.props.photo} alt="Image not Found"/>
                    <Card.Body>
                    <Link to={`/recipes/${this.props.id}`}>{this.props.title}</Link>
                    <br/>
                    <button onClick={event => this.handleLike(event)}>like {this.state.counter}</button>
                    </Card.Body>
                </Card>
            )
        }

    }
}

export default Recipe