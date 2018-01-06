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

  // should call function on mount
  // it should display image
  // it should have 2 buttons
  // it should have 2 textfields
  // it should have a drop down menu
  // it should have one instruction
  // it should have as many chips as challenges
  // on click of a challenge, call function
  // should change state on input
  // should change state on ddm onChange
  // should call function on submit

});
