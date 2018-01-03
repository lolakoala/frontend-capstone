const getUser = email => {
  //fetch user with matching email - get request w/ query params
  //if user exists, return user object
  //if user doesn't exist, just return object with email
  // if (!user) {
  return { email };
  // }
};

export const loginSuccess = email => {
  const user = getUser(email);
  return {
    type: 'LOGIN_SUCCESS',
    user
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
