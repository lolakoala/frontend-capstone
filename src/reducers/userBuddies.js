const userBuddies = (state = [], action) => {
  switch (action.type) {
  case 'GET_BUDDIES':
    return action.buddies;
  case 'ADD_BUDDY':
    return [...state, action.personObject];
  case 'DELETE_BUDDY':
    return state.filter(buddy => buddy.userName !== action.personObject.userName);
  case 'SIGN_OUT':
    return [];
  default:
    return state;
  }
};

export default userBuddies;
