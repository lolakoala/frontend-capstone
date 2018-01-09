import React from "react";
import ListWrapper from './ListWrapper.js';
import { shallow, configure } from "enzyme";
import currentUser1 from '../../mockData/currentUser1.js';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ListWrapper', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<ListWrapper
    location={{ pathname: '/list/userBuddies'}}
    getBuddies={mockFn}
    currentUser={currentUser1}
    buddySearch={[]}
    getPreferredProfs={mockFn}
    profSearch={[]}
    toggleFavorite={mockFn}
    userBuddies={[currentUser1]}
    userProfs={[]}
  />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match snap', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render BuddyList', () => {
    const budList = wrapper.find('BuddyList');

    expect(budList.length).toEqual(1);
  });

  it('should render profList is pathname does not include bud', () => {
    const wrapper2 = shallow(<ListWrapper
      location={{ pathname: '/list/userProfs'}}
      getBuddies={mockFn}
      currentUser={currentUser1}
      buddySearch={[]}
      getPreferredProfs={mockFn}
      profSearch={[]}
      toggleFavorite={mockFn}
      userBuddies={[currentUser1]}
      userProfs={[]}
    />);
    const profList = wrapper2.find('ProfsList');

    expect(profList.length).toEqual(1);
  });
});
