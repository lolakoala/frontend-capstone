import React from "react";
import LandingPage from './LandingPage.js';
import { shallow, configure } from "enzyme";
// import currentUser1 from '../../mockData/currentUser1.js';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('LandingPage', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<LandingPage
    loginSuccess={mockFn}
    currentUser={{}}
  />);
});
