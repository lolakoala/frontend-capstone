const userChallenges = (state = [], action) => {
  switch (action.type) {
  case 'ADD_USER_CHALLENGE':
    return [...state, action.challenge];
  case 'SIGN_OUT':
    return [];
  case 'REMOVE_USER_CHALLENGE':
    const updatedArray = state.filter(userChallenge => userChallenge !== action.challenge);
    return updatedArray;
  default:
    return state;
  }
};

export default userChallenges;
