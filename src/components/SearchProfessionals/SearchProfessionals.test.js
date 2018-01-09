import React from "react";
import SearchProfessionals from './SearchProfessionals.js';
import { shallow, configure, mount } from "enzyme";
import currentUser1 from '../../mockData/currentUser1.js';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SearchProfessionals', () => {
  const mockFn = jest.fn();
  const allChallenges = ['depression', 'anxiety'];
  const wrapper = shallow(<SearchProfessionals
    getInsuranceList={mockFn}
    getSpecialtyList={mockFn}
    insuranceList={['aetna']}
    specialtyList={[]}
    search={mockFn}
    currentUser={currentUser1}
    profSearch={[]}
  />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match snap', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call 2 functions on mount', () => {
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('should have drop down menu', () => {
    const ddm = wrapper.find('DropDownMenu');

    expect(ddm.length).toEqual(1);
  });

  it.skip('should change state on drop down change', () => {
    const ddm = wrapper.find('DropDownMenu');

    ddm.simulate('change', { target: { value: 'insurance' } });
    expect(wrapper.state().searchQuery).toEqual('insurance');
  });
});
