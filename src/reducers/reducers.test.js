import allChallenges from './allChallenges';
import buddySearch from './buddySearch';
import currentUser from './currentUser';
import insuranceList from './insuranceList';
import profSearch from './profSearch';
import specialtyList from './specialtyList';
import userBuddies from './userBuddies';
import userChallenges from './userChallenges';
import userProfs from './userProfs';

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
