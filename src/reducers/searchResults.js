const searchResults = (state = [], action) => {
  switch (action.type) {
  case 'SEARCH':
    return action.searchResults;
  default:
    return state;
  }
};

export default searchResults;
