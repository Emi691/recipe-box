const usersReducer = (state = [], action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return [...state, action.user]

        case "SIGNUP":
            const user = {...action.user.attributes, id: action.user.id}
            return [...state, user]

        default:
            return state
    }
}
    

export default usersReducer