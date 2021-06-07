export function login(user) { 
    return (dispatch) => fetch('http://localhost:3000/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: user})
        })
        .then(resp => {
            debugger
            resp.json()
        })
        .then(user =>{
            localStorage.setItem("token", user.jwt)
            dispatch({ type: 'LOGIN_USER', user: user.data })
        })
        .catch(error => console.log(error))
}