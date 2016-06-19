import { combineReducers } from 'redux';
import myAppReducer from './myAppReducer';

const rootReducer = combineReducers({
  myAppReducer,
});

export default rootReducer;
