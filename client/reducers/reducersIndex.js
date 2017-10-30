import {combineReducers} from 'redux';
import allGames from './addGamesReducer.js';

const allReducers = combineReducers({
  allGames: allGames
});

export default allReducers;