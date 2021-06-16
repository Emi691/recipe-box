import React, { Component } from 'react'
import Recipe from './Recipe'

class Recipes extends Component {
    state = {
        search: ''
    }
    
    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }


    renderRecipe = () => {
    if (this.state.search !== '') {
        let searchResults = this.props.recipes.filter(recipe => recipe.title.includes(this.state.search))
        return searchResults.map(recipe => <Recipe key={recipe.id} id={recipe.id} title={recipe.title} photo={recipe.photo} delete={this.props.handleDelete} user_id={recipe.user_id} />)
    } else { return this.props.recipes.map(recipe => <Recipe key={recipe.id} id={recipe.id} title={recipe.title} photo={recipe.photo} handleDelete={this.props.handleDelete} user_id={recipe.user_id} />)}
    }

    render() {
        return (
            <div className="recipesContainer">
                    <form>
                        <label>Search: </label>
                        <input type="text" onChange={event => this.handleChange(event)} value={this.state.search}/>
                    </form>
                    {this.renderRecipe()}
            </div>
        )
    }
}

export default Recipes