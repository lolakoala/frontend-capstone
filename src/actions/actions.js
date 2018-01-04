const getUser = email => {
  const userObj = {
    user: {
      email
    },
    userChallenges: []
  };
  //fetch user with matching email - get request w/ query params
  //if user exists, return user object as key value pair
  // .then fetch userChallenges
  // add challenges to userObj as key value pair
  //if user doesn't exist, just return object with email


  // if (!user) {
  return userObj;
  // }
};

export const loginSuccess = email => {
  const user = getUser(email);
  // user should end up being object with email, user, userChallenges
  return {
    type: 'LOGIN_SUCCESS',
    user: user.user,
    userChallenges: user.userChallenges
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

export const clearProfile = () => {
  return {
    type: 'CLEAR_PROFILE'
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
