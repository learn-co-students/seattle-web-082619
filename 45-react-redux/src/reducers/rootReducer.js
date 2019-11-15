import movies from './moviesReducer';
import chars from './characterReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  movies,
  chars
})