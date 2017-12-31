const userChallenges = (state = [], action) => {
  switch (action.type) {
  case 'ADD_USER_CHALLENGE':
    return [...state, action.challenge];
  default:
    return state;
  }
};

export default userChallenges;
