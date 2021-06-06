import React, {Component} from 'react'

class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    render(){
        return(
           <div>
            <h3>Log In</h3>
            <form>
                <div>
                    <label>Username: </label>
                    <input type="text" value={this.state.username}/>
                </div><br/>
                <div>
                    <label>Password: </label>
                    <input type="password" value={this.state.password}/>
                </div>
                <input type="submit" value="Log In"/>
            </form>
        </div> 
        )
    }
    
}

export default Login