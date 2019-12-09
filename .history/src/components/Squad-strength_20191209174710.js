import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'http2'
import heroes from '../reducer/heroes-reducer'


class Squadstrength extends Component{


}


function mapStateToProps(state){
    return{
        heroes:state.heroes
    }
}
export default connect(mapStateToProps)(Squadstrength);