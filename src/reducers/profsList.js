const profsList = (state = [], action) => {
  switch (action.type) {
  case 'SEARCH_PROFESSIONALS':
    return action.searchResults;
  case 'CLEAR_SEARCH_RESULTS':
    return [];
  case 'GET_PREFERRED_PROFS':
    return action.profs;
  default:
    return state;
  }
};

export default profsList;
