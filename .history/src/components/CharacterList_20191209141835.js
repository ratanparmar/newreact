import React , { Component } from 'react'
import { connect } from 'react-redux'
//import characters from '../reducer/character-reducer'

class CharacterList extends Component{
    render(){
        console.log(this.props)
        return(
            <div> 
                <h4>Character List</h4> 
                    <ul>
                        {this.props.characters.map(charcater=>{
                            return(
                                <li key ={charcater.id}>
                                   <div> {charcater.name}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
        )
    }
}
function mapsStateToProps(state){
    return{
        characters:state.characters
    }
}

export default connect(mapsStateToProps)(CharacterList);