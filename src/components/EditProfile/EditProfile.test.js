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
});
