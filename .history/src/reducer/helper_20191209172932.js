import character_json from '../data/characters.json';

export const createCharacter =function(id,title){
    console.log("inside function" , title)
    let character = character_json.find(c=>c.id === id);
    return character;
}
export default createCharacter;