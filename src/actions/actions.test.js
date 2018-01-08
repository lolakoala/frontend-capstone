import * as actions from './actions.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import currentUser1 from '../mockData/currentUser1.js';

configure({ adapter: new Adapter() });


describe('actions', () => {
  const mockUser = {
    email: 'lola@gmail.com'
  };

  it('should create an action for login', () => {
    const expectedAction = {
      type: 'LOGIN_SUCCESS',
      user: currentUser1,
      userChallenges: currentUser1.userChallenges
    };

    expect(actions.login({ user: currentUser1, userChallenges: currentUser1.userChallenges })).toEqual(expectedAction);
  });

  it('should create an action for addCity', () => {
    const expectedAction = {
      type: 'ADD_CITY',
      updatedUser: Object.assign({}, mockUser, { city: 'Denver' })
    };

    expect(actions.addCity('Denver', mockUser)).toEqual(expectedAction);
  });

  it('should create an action for addUserChallenge', () => {
    const expectedAction = {
      type: 'ADD_USER_CHALLENGE',
      challenge: 'anxiety'
    };

    expect(actions.addUserChallenge('anxiety')).toEqual(expectedAction);
  });

  it('should create an action for removeUserChallenge', () => {
    const expectedAction = {
      type: 'REMOVE_USER_CHALLENGE',
      challenge: 'anxiety'
    };

    expect(actions.removeUserChallenge('anxiety')).toEqual(expectedAction);
  });

  it('should create an action for submitProfile', () => {
    const expectedAction = {
      type: 'SUBMIT_PROFILE',
      user: Object.assign({}, currentUser1, { id:1 })
    };

    expect(actions.submitProfile(currentUser1, { id:1 })).toEqual(expectedAction);
  });

  it('should create an action for editProfile', () => {
    const expectedAction = {
      type: 'EDIT_PROFILE',
      newUser: currentUser1
    };

    expect(actions.editProfile(currentUser1)).toEqual(expectedAction);
  });

  it('should create an action for signOut', () => {
    const expectedAction = {
      type: 'SIGN_OUT'
    };

    expect(actions.signOut()).toEqual(expectedAction);
  });

  it('should create an action for clearSearchResults', () => {
    const expectedAction = {
      type: 'CLEAR_SEARCH_RESULTS'
    };

    expect(actions.clearSearchResults()).toEqual(expectedAction);
  });

  it('should create an action for toggleFavorite', () => {
    const expectedAction = {
      type: 'ADD_BUDDY',
      personObject: currentUser1
    };

    expect(actions.toggleFavorite(currentUser1, 'buddy', currentUser1)).toEqual(expectedAction);
  });

  it('should create an action for toggleFavorite', () => {
    const expectedAction = {
      type: 'ADD_PROF',
      personObject: currentUser1
    };

    expect(actions.toggleFavorite(currentUser1, 'prof', currentUser1)).toEqual(expectedAction);
  });
});
