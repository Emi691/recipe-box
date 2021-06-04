export default function fetchRecipes() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_RECIPES' })
    }
}