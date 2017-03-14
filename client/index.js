import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';


import {createStore} from 'redux';

//reducer makes changes to the state based on the action passed to it.
//                   the "action" is "dispatched" from where the event takes place
const reducer = function(state = {articles: 'default'}, action) {
  ignObj.articles = ign.get();
  return state;
};

// redux produces a new state within the "store" every time the state is passed through the reducer
// the second argument here is the initial state of our "state" (containing all the values of our application state)
const store = createStore(allReducers, {});

// this listens for changes to state so we can console log
store.subscribe(() => {
  console.log('store has changed ', store.getState());
});





//provider tag
ReactDOM.render(<App />, document.getElementById('app'));