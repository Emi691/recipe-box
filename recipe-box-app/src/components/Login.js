import React, {Component} from 'react'

class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state)
    }

    render(){
        return(
           <div>
            <h3>Log In</h3>
            <form onSubmit={event => this.handleSubmit(event)}>
                <div>
                    <label>Username: </label>
                    <input type="text" name="username" onChange={event => this.handleChange(event)} value={this.state.username}/>
                </div><br/>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" onChange={event => this.handleChange(event)} value={this.state.password}/>
                </div>
                <input type="submit" value="Log In"/>
            </form>
        </div> 
        )
    }
    
}

export default Login