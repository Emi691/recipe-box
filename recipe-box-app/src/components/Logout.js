import React, {Component} from 'react'

class Logout extends Component {
    logout = () => {
        localStorage.removeItem("token")
        this.props.history.push("/login")
    }
    
    render() {
        return (
            <>
                {this.logout()}
            </>
        )
    }
    
}

export default Logout