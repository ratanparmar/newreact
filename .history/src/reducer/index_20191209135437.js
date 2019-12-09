
import {  combineReducers } from 'redux'



function heroes(state=[],action){
    switch(action.type){
        case ADD_CHARAC:
        let heroes = [...state,createCharacter(action.id)];
        return heroes;
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    characters,
    heroes
})

function createCharacter(id){
    let character = character_json.find(c=>c.id === id);
    return character;
}

export default rootReducer;