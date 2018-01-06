import React from "react";
import LandingPage from './LandingPage.js';
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('LandingPage', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<LandingPage
    loginAttempt={mockFn}
    currentUser={{}}
  />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match snap', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have welcome msg', () => {
    const msg = wrapper.find('p');

    expect(msg.length).toEqual(1);
  });

  it('should have 2 buttons', () => {
    const buttons = wrapper.find('RaisedButton');

    expect(buttons.length).toEqual(2);
  });
});
