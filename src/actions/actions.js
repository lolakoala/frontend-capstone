const getUser = email => {
  //fetch user with matching email
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
