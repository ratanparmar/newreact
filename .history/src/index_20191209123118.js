import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore } from 'redux'
import characters from './reducer';
import { Provider } from 'react-redux';
const store = createStore(characters);
console.log("get state"+ store.getState())
store.subscribe(()=>
   console.log('getState',store.getState())
)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))