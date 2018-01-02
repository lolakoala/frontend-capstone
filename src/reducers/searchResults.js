const searchResults = (state = [], action) => {
  switch (action.type) {
  case 'SEARCH':
    return action.searchResults;
  case 'CLEAR_SEARCH_RESULTS':
    return [];
  default:
    return state;
  }
};

export default searchResults;
