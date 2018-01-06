import React from "react";
import EditProfile from './EditProfile.js';
import { shallow, configure } from "enzyme";
import currentUser1 from '../../mockData/currentUser1.js';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('EditProfile', () => {
  const mockFn = jest.fn();
  const allChallenges = ['depression', 'anxiety'];
  const wrapper = shallow(<EditProfile
    currentUser={currentUser1}
    getAllChallenges={mockFn}
    allChallenges={allChallenges}
    addUserChallenge={mockFn}
    removeUserChallenge={mockFn}
    userChallenges={['anxiety']}
    editProfile={mockFn}
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

  it('should have 2 buttons', () => {
    const buttons = wrapper.find('RaisedButton');

    expect(buttons.length).toEqual(2);
  });

  it('should have 2 textField', () => {
    const textField = wrapper.find('TextField');

    expect(textField.length).toEqual(2);
  });

  it('should have a drop down menu', () => {
    const ddm = wrapper.find('DropDownMenu');

    expect(ddm.length).toEqual(1);
  });

  it('should have instructions', () => {
    const instruction = wrapper.find('p');

    expect(instruction.length).toEqual(1);
  });

  it('should have as many chips as challenges', () => {
    const chips = wrapper.find('Chip');

    expect(chips.length).toEqual(allChallenges.length);
  });

  it('should run function on click of challenge', () => {
    const chip = wrapper.find('Chip').first();

    chip.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('should change state on change of inputs', () => {
    expect(wrapper.state()).toEqual({
      userName: currentUser1.userName,
      aboutMe: currentUser1.aboutMe,
      city: currentUser1.city
    });

    const firstInput = wrapper.find('TextField').first();
    const secondInput = wrapper.find('TextField').last();

    firstInput.simulate('change', { target: { value: 'lk' } });
    secondInput.simulate('change', { target: { value: 'about me' } });
    expect(wrapper.state().userName).toEqual('lk');
    expect(wrapper.state().aboutMe).toEqual('about me');
  });

  it('should change state on change of drop down menu', () => {
    const ddm = wrapper.find('DropDownMenu');

    ddm.simulate('change', { target: { value: 'Mobile' } });

    expect(wrapper.state().city).toEqual('Mobile');
  });

  it('should fun function on submit', () => {
    const submit = wrapper.find('RaisedButton').last();

    submit.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(3);
  });
});
