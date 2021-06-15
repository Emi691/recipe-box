export function signup(user) {  
    return (dispatch) => fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: user})
    }).then(resp => resp.json())
    .then(userData =>{ 
        localStorage.setItem("token", userData.jwt)
        dispatch({ type: 'SIGNUP', user: userData.user.data })
    })
}