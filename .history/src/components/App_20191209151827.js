import React, {Component } from 'react'
import CharacterList from './CharacterList'
import '../style/index.css'

class App extends Component{

    render(){
        return(
            <div>
                <h2>Our Super Squad!!!</h2>
                <CharacterList/>
            </div>
        )
    }
}

export default App;