import character_json from '../data/characters.json';
import { ADD_CHARAC } from '../actions'


function characters(state=character_json,action){ 
    switch(action.type){
        case ADD_CHARAC:
            let characters = state.filter(charcater_list=>charcater_list.id !== action.id)
            return characters;     
    default:
    return state;
}
}

