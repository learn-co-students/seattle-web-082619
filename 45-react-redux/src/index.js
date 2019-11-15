import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import reducer from './reducers/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// console.log(applyMiddleware)
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// console.log(store.getState())

ReactDOM.render(<Provider store={store}><App /> </Provider>, document.getElementById('root'));

