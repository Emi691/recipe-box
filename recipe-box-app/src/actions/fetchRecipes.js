export function fetchRecipes() {
    return (dispatch) => {
        debugger
        dispatch({ type: 'LOADING_RECIPES' })
        fetch('http://localhost:3000/recipes')
            .then(resp => resp.json())
            .then(recipes => dispatch({ type: 'ADD_RECIPES', recipes }))
    }
}