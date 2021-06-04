import React, {Component} from 'react'
import Signup from '../components/Signup' 
import Login from '../components/Login'

class UsersContainer extends Component {

    render() {
        return(
            <div>
                <p>UsersContainer</p>
                <Signup />
                <Login />
            </div>
        )
    }
}

export default UsersContainer