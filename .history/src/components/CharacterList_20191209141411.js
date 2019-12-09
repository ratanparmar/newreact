import React , { Component } from 'react'
import characters from '../reducer/character-reducer'

class CharacterList extends Component{
    render(){
        return(
            <div>Characters</div>
        )
    }
}
function mapsStateToProps(state){
    return{
        characters:state.characters
    }
}

export default CharacterList;