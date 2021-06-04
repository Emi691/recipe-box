const recipesReducer = (state = { recipes: [], requesting: false }, action) => {
    switch (action.type) {
        case "LOADING_RECIPES":
            return {
                ...state,
                recipes: [...state.recipes],
                requesting: true
            }

        case "ADD_RECIPES":
            return {
                ...state,
                recipes: [...state.recipes, action.recipes],
                requesting: false
            }

        case "REMOVE_RECIPE":
            return {
                ...state,
                recipes: state.recipes.filter(recipe => recipe.id !== action.id),
                requesting: false
            }
        
        default:
            return state
    }
}
    

export default recipesReducer