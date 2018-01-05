import { combineReducers } from 'redux';
import currentUser from './currentUser';
import allChallenges from './allChallenges';
import userChallenges from './userChallenges';
import insuranceList from './insuranceList';
import specialtyList from './specialtyList';
import buddySearch from './buddySearch';
import userBuddies from './userBuddies';
import profSearch from './profSearch';
import userProfs from './userProfs';

const rootReducer = combineReducers({
  currentUser,
  allChallenges,
  userChallenges,
  insuranceList,
  specialtyList,
  buddySearch,
  userBuddies,
  profSearch,
  userProfs
});

export default rootReducer;
