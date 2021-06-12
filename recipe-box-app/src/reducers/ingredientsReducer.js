const ingredientsReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_RECIPE":
            let ingredients = action.recipe.included.map(ingredient => {
                return { 
                id: ingredient.id,
                ...ingredient.attributes,
                recipeId: action.recipe.data.id
                } 
            })
            return [...state, ...ingredients]

        case "REMOVE_RECIPE":
            return state.filter(ingredient => ingredient.id !== action.id)
        
        default:
            return state
    }
}
    

export default ingredientsReducer