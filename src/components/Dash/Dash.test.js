import React from "react";
import Dash from './Dash.js';
import { shallow, configure } from "enzyme";
import currentUser1 from '../../mockData/currentUser1.js';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Dash', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<Dash
    getInsuranceList={mockFn}
    getSpecialtyList={mockFn}
    insuranceList={['medicaid', 'bcbs', 'aetna']}
    specialtyList={['couples', 'youth', 'gender']}
    search={mockFn}
    clearSearchResults={mockFn}
    allChallenges={['anxiety', 'depression']}
    getAllChallenges={mockFn}
    currentUser={currentUser1}
  />);
});
