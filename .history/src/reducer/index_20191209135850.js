import {  combineReducers } from 'redux'
import characters from './reducer/character-reducer'
import heroes from './reducer/heroes-reducer'
const rootReducer = combineReducers({
    characters,
    heroes
})

export default rootReducer;