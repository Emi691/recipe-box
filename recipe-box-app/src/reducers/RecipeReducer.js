const recipeReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_RECIPE":
            return [...state, action.recipe]

        case "REMOVE_RECIPE":
            return state.filter(recipe => recipe.id !== action.id)
        
        default:
            return state
    }
}
    

export default recipeReducer