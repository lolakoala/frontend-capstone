import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import all reducers here
import currentUser from './currentUser';
import allChallenges from './allChallenges';
import userChallenges from './userChallenges';


const rootReducer = combineReducers({
  // list all imported reducers here
  currentUser,
  allChallenges,
  userChallenges,
  form: formReducer.plugin({
    CreateProfile: (state, action) => { // <------ 'CreateProfile' is name of form given to reduxForm()
      switch (action.type) {
      case 'SUBMIT_PROFILE':
        return state;
        // returning undefined clears form
      case 'CLEAR_PROFILE':
        return undefined;
      default:
        return state;
      }
    }
  })
});

export default rootReducer;
