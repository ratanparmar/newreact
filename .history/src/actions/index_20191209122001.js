

export const ADD_CHARAC = 'ADD_CHARACTER';

export function addCharacterById(id){
    const action ={
            type: ADD_CHARAC,
            id
    }
    return action;
}