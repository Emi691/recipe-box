export function deleteRecipe(id) {
    return (dispatch) => {
        fetch(`http://localhost:3000/recipes/${id}`, {
            method: 'DELETE'
        })
            .then(resp => resp.json())
            .then(recipe => {
                debugger
                dispatch({ type: 'REMOVE_RECIPE', recipe })
            })
    }
}