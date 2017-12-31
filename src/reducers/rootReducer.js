import { combineReducers } from 'redux';
// import all reducers here
import currentUser from './currentUser';


const rootReducer = combineReducers({
  // list all imported reducers here
  currentUser
});

export default rootReducer;
