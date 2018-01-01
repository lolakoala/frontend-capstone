const userChallenges = (state = [], action) => {
  switch (action.type) {
  case 'ADD_USER_CHALLENGE':
    return [...state, action.challenge];
  case 'SIGN_OUT':
    return [];
  default:
    return state;
  }
};

export default userChallenges;
