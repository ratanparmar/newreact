import React , { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
                                   <div>
                                       {charcater.name}
                                       {charcater.strength}
                                       {charcater.intelligence}
                                       {charcater.speed}
                                   </div>
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({addCharacterById},dispatch);
}

export default connect(mapsStateToProps)(CharacterList);