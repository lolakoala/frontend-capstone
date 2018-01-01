const allChallenges = (state = [], action) => {
  switch (action.type) {
  case 'GET_ALL_CHALLENGES':
    return action.challenges;
  default:
    return state;
  }
};

export default allChallenges;
