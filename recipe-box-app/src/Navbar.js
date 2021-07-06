import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const link = {
    width: '100px',
    padding: '10px',
    margin: '0, 6px, 6px',
    background: 'white',
    color: 'black'

    }
    
class Navbar extends Component {

    isLoggedIn = () => {
        if (localStorage.getItem("token")) {
            return "Logout"
        } else {
            return "Login"
        }
    }

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
                    to={`/${this.isLoggedIn()}`}
                    exact
                    style={link}
                    activeStyle={{
                        background: "pink"
                    }}
                >{this.isLoggedIn()}</NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Navbar) 