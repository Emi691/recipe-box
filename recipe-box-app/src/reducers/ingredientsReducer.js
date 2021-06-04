const ingredientsReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_RECIPE":
            return [...state, action.ingredient]

        case "REMOVE_RECIPE":
            return state.filter(ingredient => ingredient.id !== action.id)
        
        default:
            return state
    }
}
    

export default ingredientsReducer