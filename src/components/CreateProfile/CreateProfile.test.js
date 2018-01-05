import React from "react";
import CreateProfile from './CreateProfile.js';
import { shallow, configure } from "enzyme";
import currentUser1 from '../../mockData/currentUser1.js';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CreateProfile', () => {
  const mockFn = jest.fn();
  const wrapper = <CreateProfile
    currentUser={{
      email: 'lola@lola.com',
      city: 'Denver'
    }}
    getAllChallenges={mockFn}
    allChallenges={['depression', 'anxiety']}
    addUserChallenge={mockFn}
    removeUserChallenge={mockFn}
    userChallenges={['anxiety']}
    submitProfile={mockFn}
  />;

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match snap', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
