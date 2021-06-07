import React, {Component} from 'react'
import { signup } from '../actions/signup'
import { connect } from 'react-redux'

class Signup extends Component {
    state = {
        username: '',
        email: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.signup(this.state)
        // window.location.replace('http://localhost:3001/recipes')
        // history.push('/recipes') 
    }

    render(){
        return(
           <div>
            <h3>Sign Up</h3>
            <form onSubmit={event => this.handleSubmit(event)}>
                <div>
                    <label>Username: </label>
                    <input type="text" name="username" onChange={event => this.handleChange(event)} value={this.state.username}/>
                </div><br/>
                <div>
                    <label>Email: </label>
                    <input type="text" name="email" onChange={event => this.handleChange(event)} value={this.state.email}/>
                </div><br/>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" onChange={event => this.handleChange(event)} value={this.state.password}/>
                </div>
                <input type="submit" value="Sign Up"/>
            </form>
        </div> 
        )
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (user) => dispatch(signup(user))
    }
}

export default connect(null, mapDispatchToProps)(Signup)

