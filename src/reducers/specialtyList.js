const specialtyList = (state = [], action) => {
  switch (action.type) {
  case 'GET_SPECIALTY_LIST':
    return action.specialtyList;
  default:
    return state;
  }
};

export default specialtyList;
