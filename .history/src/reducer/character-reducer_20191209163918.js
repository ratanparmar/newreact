import character_json from '../data/characters.json';
import { ADD_CHARAC, REMOVE_CHARAC } from '../actions'
import {ceateCharacter} from './helper';

function characters(state=character_json,action){ 
    switch(action.type){
        case ADD_CHARAC:
            let characters = state.filter(charcater_list=>charcater_list.id !== action.id)
            return characters; 
        case REMOVE_CHARAC:
            characters = [...state,ceateCharacter(action.id)]    
    default:
    return state;
}
}
export default characters;

