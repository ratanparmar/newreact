import character_json from '../data/characters.json';

export const createCharacter =function(id,title){
 
    let character = character_json.find(c=>c.id === id);
    console.log("inside function" , character)
    return character;
}
export default createCharacter;