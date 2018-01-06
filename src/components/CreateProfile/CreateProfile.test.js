import React from "react";
import CreateProfile from './CreateProfile.js';
import { shallow, configure } from "enzyme";
import currentUser1 from '../../mockData/currentUser1.js';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CreateProfile', () => {
  const mockFn = jest.fn();
  const allChallenges = ['depression', 'anxiety'];
  const wrapper = shallow(<CreateProfile
    currentUser={{
      email: 'lola@lola.com',
      city: 'Denver'
    }}
    getAllChallenges={mockFn}
    allChallenges={allChallenges}
    addUserChallenge={mockFn}
    removeUserChallenge={mockFn}
    userChallenges={['anxiety']}
    submitProfile={mockFn}
  />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should call function on mount', () => {
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should match snap', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have 2 buttons', () => {
    const button = wrapper.find('RaisedButton');

    expect(button.length).toEqual(2);
  });

  it('should have 2 text fields', () => {
    const textField = wrapper.find('TextField');

    expect(textField.length).toEqual(2);
  });

  it('should 1 instruction buttons', () => {
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
      userName: '',
      aboutMe: ''
    });

    const firstInput = wrapper.find('TextField').first();
    const secondInput = wrapper.find('TextField').last();

    firstInput.simulate('change', { target: { value: 'lk' } });
    secondInput.simulate('change', { target: { value: 'about me' } });
    expect(wrapper.state().userName).toEqual('lk');
    expect(wrapper.state().aboutMe).toEqual('about me');
  });

  it('should fun function on submit', () => {
    const submit = wrapper.find('RaisedButton').last();

    submit.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

});
