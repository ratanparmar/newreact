import character_json from '../data/characters.json';
import { ADD_CHARAC } from '../actions'
function characters(state=character_json,action){
    switch(action.type){
        default:
        return state;
    }
}

export default characters;