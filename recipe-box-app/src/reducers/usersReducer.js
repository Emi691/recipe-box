const usersReducer = (state = [], action) => {
    switch (action.type) {
        case "LOGIN":
            return [...state, action.user]

        case "SIGNUP":
            return [...state, action.user]
            
        default:
            return state
    }
}
    

export default usersReducer