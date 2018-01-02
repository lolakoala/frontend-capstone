import { combineReducers } from 'redux';
import currentUser from './currentUser';
import allChallenges from './allChallenges';
import userChallenges from './userChallenges';
import insuranceList from './insuranceList';
import specialtyList from './specialtyList';


const rootReducer = combineReducers({
  currentUser,
  allChallenges,
  userChallenges,
  insuranceList,
  specialtyList
});

export default rootReducer;
