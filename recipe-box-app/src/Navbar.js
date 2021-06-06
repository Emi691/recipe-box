import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

class NavBar extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Brand
                href="/"
                >Recipe Box</Navbar.Brand> 
                <Nav.Link
                    href="/recipes"
                >Recipes</Nav.Link>
                <Nav.Link
                    href="/login"
                >Login</Nav.Link>
            </Navbar>
        )
    }
}

export default NavBar 