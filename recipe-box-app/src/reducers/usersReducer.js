const usersReducer = (state = [], action) => {
    switch (action.type) {
        case "LOGIN_USER":
            let login = {...action.user.attributes, id: action.user.id}
            return [...state, login]

        case "SIGNUP":
            let user = {...action.user.attributes, id: action.user.id}
            return [...state, user]

        default:
            return state
    }
}
    

export default usersReducer