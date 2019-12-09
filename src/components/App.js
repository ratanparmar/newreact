import React, {Component } from 'react'
import CharacterList from './CharacterList'
import '../style/index.css'
import HeroesList from './HeroesList'
import Squadstrength from '../components/Squad-strength'

class App extends Component{

    render(){
        return(
            <div className='App'>
                <h2>Super Squad!!!</h2>
                <span className='col-md-4'>
                    <CharacterList/> 
                </span>
                <span className='col-md-4'><Squadstrength/></span>
                <span className='col-md-4'>
                    <HeroesList/>
                </span>
            </div>
        )
    }
}

export default App;