export function addRecipe(recipe) {
    return (dispatch) => {
        dispatch({ type: 'LOADING_RECIPES' })
        fetch('http://localhost:3000/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                recipe: {
                    title: recipe.title,
                    instructions: recipe.instructions,
                    photo: recipe.photo,
                    ingredients_attributes: recipe.ingredients
                }
            })
        })
            .then(resp => resp.json())
            .then(recipe => {
                debugger
                dispatch({ type: 'ADD_RECIPE', recipe })
            })
    }
}