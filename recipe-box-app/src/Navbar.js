import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink
                    to="/"
                    exact 
                >Home</NavLink>
                <NavLink
                    to="/login"
                    exact
                >Login</NavLink>
                <NavLink
                    to="/recipes"
                    exact
                >Recipes</NavLink>
            </div>
        )
    }
}

export default Navbar 