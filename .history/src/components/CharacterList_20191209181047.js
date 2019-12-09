import React , { Component } from 'react'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
import { addCharacterById } from '../actions/'



class CharacterList extends Component{
    render(){
        //console.log(this.props)
        return(
            <div> 
                <h4>Character List</h4> 
                    <ul className='list-group'>
                        {this.props.characters.map(charcater=>{
                            return(
                                <li key ={charcater.id} className='list-group-item'>
                                   <div className='list-item'>
                                       {charcater.name}
                                       <li className='list-group-item'>
                                       {charcater.strength}
                                       </li>
                                       
                                   </div>
                                   <div className='list-item right-button' onClick ={()=>this.props.addCharacterById(charcater.id)}>+</div>
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

/*function mapDispatchToProps(dispatch){
    return bindActionCreators({addCharacterById},dispatch);
}*/

export default connect(mapsStateToProps,{addCharacterById})(CharacterList);