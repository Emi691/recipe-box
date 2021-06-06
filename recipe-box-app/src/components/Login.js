import React from 'react'

const Login = () => (
    <div>
        <h3>Log In</h3>
    <form>
        <div>
            <label>Username: </label>
            <input type="text" />
        </div><br/>
        <div>
            <label>Password: </label>
            <input type="password" />
        </div>
            <input type="submit" value="Log In"/>
    </form>
    </div>
)

export default Login