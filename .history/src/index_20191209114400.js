import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore } from 'redux'
import characters from './reducer';
import { Provider } from 'react-redux';
const store = createStore(characters);

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root'))