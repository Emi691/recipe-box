export function login(user) {  
    return (dispatch) => {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(resp => resp.json())
        .then(user =>{ 
            localStorage.setItem("token", user.jwt)
            dispatch({ type: 'LOGIN_USER', user: user.data })
        })
    }
}