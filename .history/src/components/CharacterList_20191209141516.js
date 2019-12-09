import React , { Component } from 'react'
import { connect } from 'react-redux'
//import characters from '../reducer/character-reducer'

class CharacterList extends Component{
    render(){
        console.log(state)
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

export default connect(mapsStateToProps)(CharacterList);