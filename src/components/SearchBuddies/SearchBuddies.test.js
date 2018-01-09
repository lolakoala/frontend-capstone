import React from "react";
import SearchBuddies from './SearchBuddies.js';
import { shallow, configure } from "enzyme";
import currentUser1 from '../../mockData/currentUser1.js';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SearchBuddies', () => {
  const mockFn = jest.fn();
  const allChallenges = ['depression', 'anxiety'];
  const wrapper = shallow(<SearchBuddies
    allChallenges={allChallenges}
    getAllChallenges={mockFn}
    search={mockFn}
    currentUser={currentUser1}
    buddySearch={[]}
  />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match snap', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call function on mount', () => {
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should have drop down menu', () => {
    const ddm = wrapper.find('DropDownMenu');

    expect(ddm.length).toEqual(1);
  });

  it('should have one button', () => {
    const button = wrapper.find('RaisedButton');

    expect(button.length).toEqual(1);
  });

  it.skip('should change state on change of drop down menu', () => {
    const ddm = wrapper.find('DropDownMenu');

    ddm.simulate('change', { target: { value: allChallenges[1] } });
    expect(wrapper.state().value).toEqual(allChallenges[1]);
  });
});
