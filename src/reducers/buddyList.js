const buddyList = (state = [], action) => {
  switch (action.type) {
  case 'SEARCH_BUDDIES':
    return action.searchResults;
  case 'CLEAR_SEARCH_RESULTS':
    return [];
  case 'GET_BUDDIES':
    return action.buddies;
  default:
    return state;
  }
};

export default buddyList;
