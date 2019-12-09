import React , { Component } from 'react'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
import { addCharacterById } from '../actions/'



class HeroesList extends Component{
    render(){
        console.log('heroeslist',this.props)
        return(
            <div> 
                <h4>Heroes List</h4> 
                
                    <ul className='list-group'>
                        {this.props.characters.map(hero=>{
                            return(
                                <li key ={hero.id} className='list-group-item'>
                                   <div className='list-item'>
                                       {hero.name}
                                       {hero.strength}
                                       {hero.intelligence}
                                       {hero.speed}
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
        characters:state.heroes
    }
}

/*function mapDispatchToProps(dispatch){
    return bindActionCreators({addCharacterById},dispatch);
}*/

export default connect(mapsStateToProps,{addCharacterById})(HeroesList);