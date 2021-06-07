export function login(user) { 
    return (dispatch) => fetch('http://localhost:3000/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: user})
        })
        .then(resp => resp.json())
        .then(userData =>{
            localStorage.setItem("token", userData.jwt)
            dispatch({ type: 'LOGIN_USER', user: userData.user.data })
        })
        .catch(error => console.log(error))
}