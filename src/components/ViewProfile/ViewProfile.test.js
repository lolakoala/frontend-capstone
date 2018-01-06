import React from "react";
import ViewProfile from './ViewProfile.js';
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import currentUser1 from '../../mockData/currentUser1.js';

configure({ adapter: new Adapter() });

describe('ViewProfile', () => {
  const wrapper = shallow(<ViewProfile
    currentUser={currentUser1}
    userChallenges={['anxiety']}
    history={{}}
  />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match snap', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have username', () => {
    const userName = wrapper.find('h3');

    expect(userName.length).toEqual(1);
  });

  it('should have city', () => {
    const city = wrapper.find('h4');

    expect(city.length).toEqual(1);
  });

  it('should have about me', () => {
    const aboutMe = wrapper.find('p');

    expect(aboutMe.length).toEqual(1);
  });

  it('should have list', () => {
    const list = wrapper.find('List');

    expect(list.length).toEqual(1);
  });

  it('should have subheader', () => {
    const sub = wrapper.find('Subheader');

    expect(sub.length).toEqual(1);
  });

  it('should have num of list items equal to user challenges', () => {
    const items = wrapper.find('ListItem');

    expect(items.length).toEqual(1);

    it('should have button', () => {
      const button = wrapper.find('RaisedButton');

      expect(button.length).toEqual(1);
    });
  });
});
