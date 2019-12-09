
import { ADD_CHARAC, REMOVE_CHARAC } from '../actions'
import { createCharacter } from './helper'


function heroes(state=[],action){
    switch(action.type){
        case ADD_CHARAC:
        let heroes = [...state,createCharacter(action.id,'hero')];
        return heroes;
        case REMOVE_CHARAC:
            heroes = state.filter(item=>item.id !== action.id)
            return heroes;
        default:
            return state;
    }
}



export default heroes;