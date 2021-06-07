import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Recipe from './Recipe'

class Recipes extends Component {
    
    renderRecipe = () => this.props.recipes.map(recipe => <Recipe key={recipe.id} title={recipe.title} photo={recipe.photo} />)

    render() {
        console.log(this.props)
        return (
            <Container className='mx-auto' >
                    {this.renderRecipe()}
            </Container>
        )
    }
}

export default Recipes