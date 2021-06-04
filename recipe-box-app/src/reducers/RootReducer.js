import usersReducer from './usersReducer'
import recipesReducer from './recipesReducer'
import ingredientsReducer from "./ingredientsReducer"
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    users: usersReducer,
    recipes: recipesReducer,
    ingredients: ingredientsReducer
})

export default rootReducer