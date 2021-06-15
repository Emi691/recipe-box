import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logout from './components/Logout'

const link = {
    width: '100px',
    padding: '10px',
    margin: '0, 6px, 6px',
    background: 'white',
    color: 'black'

    }
    
class Navbar extends Component {

    render() {
        return (
            <div>
                <NavLink
                    to="/"
                    exact
                    style={link}
                    activeStyle={{
                        background: "pink"
                    }}
                >Home</NavLink>
                <NavLink
                    to="/about"
                    exact
                    style={link}
                    activeStyle={{
                        background: "pink"
                    }}
                >About</NavLink>
                <NavLink
                    to="/recipes"
                    exact
                    style={link}
                    activeStyle={{
                        background: "pink"
                    }}
                >Recipes</NavLink>
                <NavLink
                    to="/login"
                    exact
                    style={link}
                    activeStyle={{
                        background: "pink"
                    }}
                >Log In</NavLink>
            </div>
        )
    }
}

export default Navbar 