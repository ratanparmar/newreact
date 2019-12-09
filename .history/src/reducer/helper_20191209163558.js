function createCharacter(id){
    let character = character_json.find(c=>c.id === id);
    return character;
}