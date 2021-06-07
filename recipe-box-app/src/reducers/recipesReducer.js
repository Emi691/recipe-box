const recipesReducer = (state = { recipes: [], requesting: false }, action) => {
    switch (action.type) {
        case "LOADING_RECIPES":
            return {
                ...state,
                recipes: [...state.recipes],
                requesting: true
            }

        case "ADD_RECIPES":
            const recipes = action.recipes.map(recipe => {
                return {id: recipe.id, title: recipe.attributes.title, instructions: recipe.attributes.instructions, photo: recipe.attributes.photo}
            })

            return {
                ...state,
                recipes: [...state.recipes, ...recipes],
                requesting: false
            }
        
        case 'ADD_RECIPE':
            return {
                ...state,
                recipes: [...state.recipes, action.recipe],
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