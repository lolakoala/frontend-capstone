const userBuddies = (state = [], action) => {
  switch (action.type) {
  case 'GET_BUDDIES':
    return action.buddies;
  case 'ADD_BUDDY':
    return [...state, action.personObject];
  default:
    return state;
  }
};

export default userBuddies;
