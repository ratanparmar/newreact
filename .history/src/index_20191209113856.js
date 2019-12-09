import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore } from 'redux'
import characters from './reducer';

const store = createStore(characters);

ReactDOM.render( <App />,document.getElementById('root'))