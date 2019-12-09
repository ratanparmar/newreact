

export const ADD_CHARAC = 'ADD_CHARACTER';
export const REMOVE_CHARAC = 'REMOVE_CHARACTER';

export function addCharacterById(id){
    const action ={
            type: ADD_CHARAC,
            id
    }
    return action;
}
export function removeCharacterById(id){
    const action ={
            type: REMOVE_CHARAC,
            id
    }
    return action;
}