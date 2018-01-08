const userProfs = (state = [], action) => {
  switch (action.type) {
  case 'GET_PREFERRED_PROFS':
    return action.profs;
  case 'ADD_PROF':
    return [...state, action.personObject];
  case 'DELETE_PROF':
    return state.filter(prof => prof.id !== action.personObject.id);
  case 'SIGN_OUT':
    return [];
  default:
    return state;
  }
};

export default userProfs;
