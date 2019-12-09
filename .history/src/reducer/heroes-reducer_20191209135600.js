import character_json from '../data/characters.json';
import { ADD_CHARAC } from '../actions'



function heroes(state=[],action){
    switch(action.type){
        case ADD_CHARAC:
        let heroes = [...state,createCharacter(action.id)];
        return heroes;
        default:
            return state;
    }
}

function createCharacter(id){
    let character = character_json.find(c=>c.id === id);
    return character;
}
