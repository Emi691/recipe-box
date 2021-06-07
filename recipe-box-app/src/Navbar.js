import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import Logout from './components/Logout'

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
                <Button
                    onClick={event => Logout()}
                > Logout </Button>
            </Navbar>
        )
    }
}

export default NavBar 