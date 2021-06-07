export function addRecipe(recipe) {
    return (dispatch) => {
        dispatch({ type: 'LOADING_RECIPES' })
        fetch('http://localhost:3000/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
            .then(resp => resp.json())
            .then(recipe => {
                debugger
                dispatch({ type: 'ADD_RECIPE', recipe: recipe.data.attributes })
            })
    }
}