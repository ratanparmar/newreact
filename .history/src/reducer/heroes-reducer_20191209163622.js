import character_json from '../data/characters.json';
import { ADD_CHARAC } from '../actions'
import {createCharacter} from './helper'


function heroes(state=[],action){
    switch(action.type){
        case ADD_CHARAC:
        let heroes = [...state,createCharacter(action.id)];
        return heroes;
        default:
            return state;
    }
}



export default heroes;