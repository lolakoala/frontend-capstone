import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';
// import all reducers here
import currentUser from './currentUser';
import allChallenges from './allChallenges';


const rootReducer = combineReducers({
  // list all imported reducers here
  currentUser,
  allChallenges,
  form: reducerForm
});

export default rootReducer;
