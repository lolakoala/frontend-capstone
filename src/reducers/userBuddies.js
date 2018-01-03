const userBuddies = (state = [], action) => {
  switch (action.type) {
  case 'GET_BUDDIES':
    return action.buddies;
  default:
    return state;
  }
};

export default userBuddies;
