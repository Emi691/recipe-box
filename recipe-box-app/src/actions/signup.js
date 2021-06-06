export function signup(user) {  
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(user =>{ 
        localStorage.setItem("token", data.jwt)
        dispatch({ type: 'LOGIN_USER', user })
    })
}