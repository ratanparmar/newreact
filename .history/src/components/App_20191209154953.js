import React, {Component } from 'react'
import CharacterList from './CharacterList'
import '../style/index.css'
import HeroesList from './HeroesList'

class App extends Component{

    render(){
        return(
            <div className='App'>
                <h2>Our Super Squad!!!</h2>
                <div className='col-md-6'>
                <CharacterList/> 
                </div>
                <div className='col-md-6'>
                <HeroesList/>
                </div>
            </div>
        )
    }
}

export default App;