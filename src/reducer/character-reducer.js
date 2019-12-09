import character_json from '../data/characters.json';
import { ADD_CHARAC, REMOVE_CHARAC } from '../actions'
import {createCharacter} from './helper';

function characters(state=character_json,action){ 
    let characters =[];
    switch(action.type){
        case ADD_CHARAC:
             characters = state.filter(charcater_list=>charcater_list.id !== action.id)
            return characters; 
        case REMOVE_CHARAC:
            //console.log("first remove",action.id)
             characters = [...state,createCharacter(action.id,'charact')] 
            console.log(characters);  
            return characters; 
    default:
    return state;
}
}
export default characters;

