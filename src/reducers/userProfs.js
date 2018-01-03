const userProfs = (state = [], action) => {
  switch (action.type) {
  case 'GET_PREFERRED_PROFS':
    return action.profs;
  case 'ADD_PROF':
    return [...state, action.personObject];
  default:
    return state;
  }
};

export default userProfs;
