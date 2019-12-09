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
                <div className='col-md-4'>
                    <CharacterList/> 
                </div>
                <div className='col-md-4'><Squadstrength/></div>
                <div className='col-md-4'>
                    <HeroesList/>
                </div>
            </div>
        )
    }
}

export default App;