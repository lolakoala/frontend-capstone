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

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match snap', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a toolbar', () => {
    const toolBar = wrapper.find('Toolbar');

    expect(toolBar.length).toEqual(1);
  });

  it('should have 5 links', () => {
    const links = wrapper.find('Link');

    expect(links.length).toEqual(5);
  });

  it('should have tabs', () => {
    const tabs = wrapper.find('Tabs');

    expect(tabs.length).toEqual(1);
  });

  it('should have 2 inner tabs', () => {
    const tabs = wrapper.find('Tab');

    expect(tabs.length).toEqual(2);
  });

  it('should call function on mount', () => {
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
