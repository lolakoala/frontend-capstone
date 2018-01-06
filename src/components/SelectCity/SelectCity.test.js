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

});
