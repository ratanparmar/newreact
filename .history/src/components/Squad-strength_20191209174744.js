import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'http2'
import heroes from '../reducer/heroes-reducer'


class Squadstrength extends Component{
render()
{
    return(
        <div>
            <h4 >Squad Strngth</h4>
        </div>
    )
}

}


function mapStateToProps(state){
    return{
        heroes:state.heroes
    }
}
export default connect(mapStateToProps)(Squadstrength);