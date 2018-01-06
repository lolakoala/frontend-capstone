import React from "react";
import ListWrapper from './ListWrapper.js';
import { shallow, configure } from "enzyme";
import currentUser1 from '../../mockData/currentUser1.js';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ListWrapper', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<ListWrapper
    location={{ pathname: '/listUserBuddies'}}
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

  it('should set state on mount', () => {
    expect(wrapper.state()).toEqual({
      value: '',
      list: [currentUser1],
      listName: 'buddies'
    });
  });

  it('should call 2 functions on mount', () => {
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('should have textfield', () => {
    const search = wrapper.find('TextField');

    expect(search.length).toEqual(1);
  });

  it('should change state on change of inputs', () => {
    const input = wrapper.find('TextField');

    input.simulate('change', { target: { value: 'lola' } });
    expect(wrapper.state().value).toEqual('lola');
  });

  it('should render BuddyList', () => {
    const budList = wrapper.find('BuddyList');

    expect(budList.length).toEqual(1);
  });

  it('should render profList is pathname does not include bud', () => {
    const wrapper2 = shallow(<ListWrapper
      location={{ pathname: '/listUserProfs'}}
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
