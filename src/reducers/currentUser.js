const currentUser = (state = {}, action) => {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return action.user;
  case 'ADD_CITY':
    return action.updatedUser;
  case 'SUBMIT_PROFILE':
    return action.user;
  case 'ADD_USER_ID':
    console.log('in reducer');
    return action.newUser;
  case 'EDIT_PROFILE':
    return action.newUser;
  case 'SIGN_OUT':
    return {};
  default:
    return state;
  }
};

export default currentUser;
