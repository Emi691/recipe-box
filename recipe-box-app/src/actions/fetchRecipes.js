export function fetchRecipes() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_RECIPES' })
        fetch('http://localhost:3000/recipes', {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(resp => resp.json())
            .then(recipes => dispatch({ type: 'ADD_RECIPES', recipes: recipes.data }))
    }
}