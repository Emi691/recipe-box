export default function fetchRecipes() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_RECIPES' })
        fetch('http://localhost3000/recipes')
            .then(resp => resp.json())
            .then(recipes => dispatch({ type: 'ADD_RECIPES', recipes }))
    }
}