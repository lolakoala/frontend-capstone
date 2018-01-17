const userImage = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_IMAGE':
    return action.imageStuff;
  default:
    return state;
  }
};

export default userImage;
