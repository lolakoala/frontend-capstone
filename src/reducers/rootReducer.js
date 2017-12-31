import { combineReducers } from 'redux';
// import all reducers here
import currentUser from './currentUser';
import allChallenges from './allChallenges';


const rootReducer = combineReducers({
  // list all imported reducers here
  currentUser,
  allChallenges
});

export default rootReducer;
