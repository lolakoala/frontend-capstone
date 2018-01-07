const userBuddies = (state = [], action) => {
  switch (action.type) {
  case 'GET_BUDDIES':
    return action.buddies;
  case 'ADD_BUDDY':
    return [...state, action.personObject];
  case 'DELETE_BUDDY':
    return state.filter(buddy => buddy.userName !== action.personObject.userName);
  default:
    return state;
  }
};

export default userBuddies;
