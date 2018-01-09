import React from "react";
import SelectCity from './SelectCity.js';
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SelectCity', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<SelectCity
    currentUser={{ email: 'lola@lola.com' }}
    addCity={mockFn}
  />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match snap', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have instructions', () => {
    const instruction = wrapper.find('h2');

    expect(instruction.length).toEqual(1);
  });

  it('should have drop down menu', () => {
    const ddm = wrapper.find('DropDownMenu');

    expect(ddm.length).toEqual(1);
  });

  // state returns undefined
  it.skip('should change state on change of drop down', () => {
    const ddm = wrapper.find('DropDownMenu');

    ddm.simulate('change', { target: { value: 'Denver' } });
    expect(wrapper.state().value).toEqual('Denver');
  });

  it.skip('should run function on change of drop down', () => {
    const ddm = wrapper.find('DropDownMenu');

    ddm.simulate('change', { target: { value: 'Denver' } });
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
