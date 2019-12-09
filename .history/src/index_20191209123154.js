import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore } from 'redux'
import characters from './reducer';
import { Provider } from 'react-redux';
import { addCharacterById } from './actions';
const store = createStore(characters);
console.log("get state"+ store.getState())
store.subscribe(()=>
   console.log('getState',store.getState())
)
store.dispatch(addCharacterById(3));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))