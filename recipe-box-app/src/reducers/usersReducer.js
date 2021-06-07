const usersReducer = (state = [], action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return [...state, action.user]

        case "SIGNUP":
            return [...state, action.user]

        default:
            return state
    }
}
    

export default usersReducer