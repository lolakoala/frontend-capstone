import React from "react";
import Persisted from './Persisted.js';
import { shallow, configure } from "enzyme";
import currentUser1 from '../../mockData/currentUser1.js';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Persisted', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<Persisted
    currentUser={currentUser1}
    location={{
      pathname: '/toolbox'
    }}
    signOut={mockFn}
    history={{}}
  />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match snap', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have 3 raised buttons', () => {
    const raisedButton = wrapper.find('RaisedButton');

    expect(raisedButton.length).toEqual(3);
  });

  it('should have a logo', () => {
    const logo = wrapper.find('img');

    expect(logo.length).toEqual(1);
  });

  it('should have an avatar', () => {
    const avatar = wrapper.find('Avatar');

    expect(avatar.length).toEqual(1);
  });

  it('should have a username', () => {
    const userName = wrapper.find('h3');

    expect(userName.length).toEqual(1);
  });

  // add test for click of signout
});
