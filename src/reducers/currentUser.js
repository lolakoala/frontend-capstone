const currentUser = (state = {}, action) => {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return action.user;
  case 'ADD_CITY':
    return action.updatedUser;
  default:
    return state;
  }
};

export default currentUser;
