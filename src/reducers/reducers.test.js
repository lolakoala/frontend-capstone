import allChallenges from './allChallenges';
import buddySearch from './buddySearch';
import currentUser from './currentUser';
import insuranceList from './insuranceList';
import profSearch from './profSearch';
import specialtyList from './specialtyList';
import userBuddies from './userBuddies';
import userChallenges from './userChallenges';
import userProfs from './userProfs';
import currentUser1 from '../mockData/currentUser1';

describe('allChallenges reducer', () => {
  it('should have a default state', () => {
    expect(allChallenges(undefined, {})).toEqual([]);
  });

  it('should give challenges for getAllChallenges', () => {
    const action = {
      type: 'GET_ALL_CHALLENGES',
      challenges: [1, 2, 3]
    };

    expect(allChallenges(undefined, action)).toEqual([1, 2, 3]);
  });
});

describe('buddySearch reducer', () => {
  it('should have default state', () => {
    expect(buddySearch(undefined, {})).toEqual([]);
  });

  it('should give buddy list for search results', () => {
    const action = {
      type: 'SEARCH_BUDDIES',
      searchResults: [1, 2, 3]
    };

    expect(buddySearch(undefined, action)).toEqual([1, 2, 3]);
  });

  it('should give empty list for clear results', () => {
    const action = {
      type: 'CLEAR_SEARCH_RESULTS'
    };

    expect(buddySearch(undefined, action)).toEqual([]);
  });
});

describe('currentUser reducer', () => {
  it('should have default state', () => {
    expect(currentUser(undefined, {})).toEqual({});
  });

  it('should return object for login', () => {
    const action = {
      type: 'LOGIN_SUCCESS',
      user: currentUser1
    };

    expect(currentUser(undefined, action)).toEqual(currentUser1);
  });

  it('should return object for add city', () => {
    const action = {
      type: 'ADD_CITY',
      updatedUser: currentUser1
    };

    expect(currentUser(undefined, action)).toEqual(currentUser1);
  });

  it('should return object for submit profile', () => {
    const action = {
      type: 'SUBMIT_PROFILE',
      user: currentUser1
    };

    expect(currentUser(undefined, action)).toEqual(currentUser1);
  });

  it('should return object for add id', () => {
    const action = {
      type: 'ADD_USER_ID',
      newUser: currentUser1
    };

    expect(currentUser(undefined, action)).toEqual(currentUser1);
  });

  it('should return object for edit profile', () => {
    const action = {
      type: 'EDIT_PROFILE',
      newUser: currentUser1
    };

    expect(currentUser(undefined, action)).toEqual(currentUser1);
  });

  it('should return empty object for signout', () => {
    const action = {
      type: 'SIGN_OUT'
    };

    expect(currentUser(undefined, action)).toEqual({});
  });
});

describe('insuranceList reducer', () => {
  it('should have default state', () => {
    expect(insuranceList(undefined, {})).toEqual([]);
  });

  it('should return list for get insurance', () => {
    const action = {
      type: 'GET_INSURANCE_LIST',
      insuranceList: [1, 2, 3]
    };

    expect(insuranceList(undefined, action)).toEqual([1, 2, 3]);
  });
});

describe('profSearch reducer', () => {
  it('should have default state', () => {
    expect(profSearch(undefined, {})).toEqual([]);
  });

  it('should return list for search', () => {
    const action = {
      type: 'SEARCH_PROFESSIONALS',
      searchResults: [1, 2, 3]
    };

    expect(profSearch(undefined, action)).toEqual([1, 2, 3]);
  });

  it('should return empty array for clear search', () => {
    const action = {
      type: 'CLEAR_SEARCH_RESULTS'
    };

    expect(profSearch(undefined, action)).toEqual([]);
  });
});

describe('specialtyList reducer', () => {
  it('should have default state', () => {
    expect(specialtyList(undefined, {})).toEqual([]);
  });

  it('should return list for get specialty', () => {
    const action = {
      type: 'GET_SPECIALTY_LIST',
      specialtyList: [1, 2, 3]
    };

    expect(specialtyList(undefined, action)).toEqual([1, 2, 3]);
  });
});

describe('userBuddies reducer', () => {
  it('should have default state', () => {
    expect(userBuddies(undefined, {})).toEqual([]);
  });

  it('should return list for get buddies', () => {
    const action = {
      type: 'GET_BUDDIES',
      buddies: [1, 2, 3]
    };

    expect(userBuddies(undefined, action)).toEqual([1, 2, 3]);
  });

  it('should return list plus object for add buddy', () => {
    const action = {
      type: 'ADD_BUDDY',
      personObject: currentUser1
    };
    const state = [1, 2, 3];

    expect(userBuddies(state, action)).toEqual([...state, currentUser1]);
  });

  it('should remove buddy from list for delete', () => {
    const action = {
      type: 'DELETE_BUDDY',
      personObject: currentUser1
    };
    const state = [currentUser1];

    expect(userBuddies(state, action)).toEqual([]);
  });

  it('should empty array on sign out', () => {
    const action = {
      type: 'SIGN_OUT'
    };

    expect(userBuddies(undefined, action)).toEqual([]);
  });
});

describe('userChallenges reducer', () => {
  it('should have default state', () => {
    expect(userChallenges(undefined, {})).toEqual([]);
  });

  it('should return list for add challenge', () => {
    const action = {
      type: 'ADD_USER_CHALLENGE',
      challenge: 'OCD'
    };

    expect(userChallenges(['depression'], action)).toEqual(['depression', 'OCD']);
  });

  it('should return empty array for signout', () => {
    const action = {
      type: 'SIGN_OUT'
    };

    expect(userChallenges(undefined, action)).toEqual([]);
  });

  it('should return challenges on login', () => {
    const action = {
      type: 'LOGIN_SUCCESS',
      userChallenges: [1, 2, 3]
    };

    expect(userChallenges(undefined, action)).toEqual([1, 2, 3]);
  });

  it('should remove challenge', () => {
    const action = {
      type: 'REMOVE_USER_CHALLENGE',
      challenge: 'depression'
    };

    expect(userChallenges(['depression', 'OCD'], action)).toEqual(['OCD']);
  });
});

describe('userProfs reducer', () => {
  it('should have default state', () => {
    expect(userProfs(undefined, {})).toEqual([]);
  });

  it('should return list for get profs', () => {
    const action = {
      type: 'GET_PREFERRED_PROFS',
      profs: [1, 2, 3]
    };

    expect(userProfs(undefined, action)).toEqual([1, 2, 3]);
  });

  it('should return updated list for add', () => {
    const action = {
      type: 'ADD_PROF',
      personObject: currentUser1
    };
    const state = [1, 2, 3];

    expect(userProfs(state, action)).toEqual([...state, currentUser1]);
  });

  it('should remove prof on delete', () => {
    const action = {
      type: 'DELETE_PROF',
      personObject: { id: 1 }
    };
    const state = [{ id: 1}];

    expect(userProfs(state, action)).toEqual([]);
  });

  it('should empty array on signout', () => {
    const action = {
      type: 'SIGN_OUT'
    };

    expect(userProfs(undefined, action)).toEqual([]);
  });
});
