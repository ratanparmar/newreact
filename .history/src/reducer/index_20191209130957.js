import character_json from '../data/characters.json';
import { ADD_CHARAC } from '../actions'
import {  combineReducers } from 'redux'


function characters(state=character_json,action){ 
        switch(action.type){
            case ADD_CHARAC:
                let characters = state.filter(charcater_list=>charcater_list.id !== action.id)
                return characters;     
        default:
        return state;
    }
}

function heroes(state=[],action){
    switch(action.type){
        case ADD_CHARAC:
        let heroes = [...state,createCharacter(action.id)];
        return heroes;
        default:
            return state;
    }
}
const rootReducer = combineReducers[
    characters,
    heroes
]

function createCharacter(id){
    let character = character_json.find(c=>c.id === id);
    return character;
}

export default rootReducer;