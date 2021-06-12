export function fetchIngredients() {
    return (dispatch) => {
        fetch('http://localhost:3000/ingredients')
            .then(resp => resp.json())
            .then(ingredients => {
                dispatch({ type: 'ADD_INGREDIENTS', ingredients: ingredients.data})
            })
    }
}