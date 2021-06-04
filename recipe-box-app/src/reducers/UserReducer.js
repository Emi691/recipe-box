const userReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_USER":
            return [...state, action.user]

        case "LOG_OUT":
            return state.filter(user => user.id !== action.id)
        
        default:
            return state
    }
}
    

export default userReducer