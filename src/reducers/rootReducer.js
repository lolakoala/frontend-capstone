import { combineReducers } from 'redux';
import currentUser from './currentUser';
import allChallenges from './allChallenges';
import userChallenges from './userChallenges';
import insuranceList from './insuranceList';


const rootReducer = combineReducers({
  currentUser,
  allChallenges,
  userChallenges,
  insuranceList
});

export default rootReducer;
