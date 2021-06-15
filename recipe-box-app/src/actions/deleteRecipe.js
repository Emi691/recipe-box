export function deleteRecipe(id) {
    return (dispatch) => {
        fetch(`http://localhost:3000/recipes/${id}`, {
            method: 'DELETE'
        })
            .then(resp => resp.json())
            .then(response => {
                dispatch({ type: 'REMOVE_RECIPE', id })
            })
            .catch(error => alert('recipe could not be deleted'))
    }
}