const profSearch = (state = [], action) => {
  switch (action.type) {
  case 'SEARCH_PROFESSIONALS':
    return action.searchResults;
  case 'CLEAR_SEARCH_RESULTS':
    return [];
  default:
    return state;
  }
};

export default profSearch;
