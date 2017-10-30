import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import allReducers from './reducers/reducersIndex.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


const store = createStore(allReducers);


//provider tag
ReactDOM.render( (<Provider store={store}>
                                  <App />
                                </Provider>), document.getElementById('app'));

