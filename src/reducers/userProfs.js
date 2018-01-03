const userProfs = (state = [], action) => {
  switch (action.type) {
  case 'GET_PREFERRED_PROFS':
    return action.profs;
  default:
    return state;
  }
};

export default userProfs;
