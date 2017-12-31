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
