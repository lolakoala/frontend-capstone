import * as actions from './actions.js';


describe('actions', () => {
  const mockUser = {
    email: 'lola@gmail.com'
  };

  it('should create an action for add city', () => {
    const expectedAction = {
      type: 'ADD_CITY',
      updatedUser: Object.assign({}, mockUser, { city: 'Denver' })
    };

    expect(actions.addCity('Denver, mockUser')).toEqual(expectedAction);
  });
});
