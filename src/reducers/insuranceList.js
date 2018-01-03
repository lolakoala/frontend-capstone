const insuranceList = (state = [], action) => {
  switch (action.type) {
  case 'GET_INSURANCE_LIST':
    return action.insuranceList;
  default:
    return state;
  }
};

export default insuranceList;
