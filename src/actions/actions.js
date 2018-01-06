import backend from './backend';
import userFetcher from '../helpers/userFetcher';

const login = user => {
  return {
    type: 'LOGIN_SUCCESS',
    user: user.user,
    userChallenges: user.userChallenges
  };
};

export const loginAttempt = email => {
  return dispatch => {
    fetch(`${backend}/api/v1/users?user_email=${email}`)
      .then(res => res.json())
      .then(res => {
        const resUser = res.users[0];
        const user = {
          user: {
            email,
            id: resUser.id,
            userName: resUser.user_name,
            aboutMe: resUser.user_about,
            // user img
            city: resUser.location
          },
          // set challenges when they come back
          userChallenges: []
        };
        return user;
      })
      .then(user => dispatch(login(user)))
      .catch(() => {
        dispatch(login({
          user: {
            email
          },
          userChallenges: []
        }));
      }
      );
  };
};


export const addCity = (city, user) => {
  const updatedUser = Object.assign({}, user, { city });
  return {
    type: 'ADD_CITY',
    updatedUser
  };
};

const fetchAllChallenges = () => {
  //get request to server for list of challenges
  //below is just a bit of mock data to play with
  return ['depression', 'anxiety'];
};

export const getAllChallenges = () => {
  const challenges = fetchAllChallenges();
  return {
    type: 'GET_ALL_CHALLENGES',
    challenges
  };
};

export const addUserChallenge = challenge => {
  return {
    type: 'ADD_USER_CHALLENGE',
    challenge
  };
};

export const removeUserChallenge = challenge => {
  return {
    type: 'REMOVE_USER_CHALLENGE',
    challenge
  };
};

const postUser = newUser => {
  // post request to server to post new user
};

export const submitProfile = newUser => {
  postUser(newUser);
  return {
    type: 'SUBMIT_PROFILE',
    newUser
  };
};

const patchUser = newUser => {
  // patch request to server to patch new user
};

export const editProfile = newUser => {
  patchUser(newUser);
  return {
    type: 'EDIT_PROFILE',
    newUser
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};

const fetchInsuranceList = () => {
  // get request to server for insurance list
  // mock data to play with below
  return ['medicaid', 'cigna', 'aetna'];
};

export const getInsuranceList = () => {
  const insuranceList = fetchInsuranceList();
  return {
    type: 'GET_INSURANCE_LIST',
    insuranceList
  };
};

const fetchSpecialtyList = () => {
  // get request to server for specialty list
  // mock data to play with below
  return ['relationships', 'anxiety', 'depression'];
};

export const getSpecialtyList = () => {
  const specialtyList = fetchSpecialtyList();
  return {
    type: 'GET_SPECIALTY_LIST',
    specialtyList
  };
};

const sendSearch = searchObject => {
  // use object contents to make get request to server with query params
};

export const search = searchObject => {
  const searchResults = sendSearch(searchObject);

  if (searchObject.group === 'professionals') {
    return {
      type: 'SEARCH_PROFESSIONALS',
      searchResults
    };
  } else {
    return {
      type: 'SEARCH_BUDDIES',
      searchResults
    };
  }
};

export const clearSearchResults = () => {
  return {
    type: 'CLEAR_SEARCH_RESULTS'
  };
};

const fetchBuddies = user => {
  // get request to server for buddies
};

export const getBuddies = user => {
  const buddies = fetchBuddies(user);
  return {
    type: 'GET_BUDDIES',
    buddies
  };
};

const fetchProfs = user => {
  // get request for fave profs
};

export const getPreferredProfs = user => {
  const profs = fetchProfs(user);
  return {
    type: 'GET_PREFERRED_PROFS',
    profs
  };
};

const postBuddy = (user, personObject) => {
  // fetchBuddies(user) to check if buddy is already fave
  // make post or patch request to add/remove fave buddy
};

const postProf = (user, personObject) => {
  // fetchProfs(user) to check if prof is already fave
  // make post or patch request to add/remove fave prof
};

export const toggleFavorite = (user, type, personObject) => {
  if (type === 'buddy') {
    postBuddy(user, personObject);
    return {
      type: 'ADD_BUDDY',
      personObject
    };
  } else {
    postProf(user, personObject);
    return {
      type: 'ADD_PROF',
      personObject
    };
  }
};
