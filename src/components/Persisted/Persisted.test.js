import React from "react";
import Persisted from './Persisted.js';
import { shallow } from "enzyme";
import currentUser1 from '../../mockData/currentUser1.js';


describe('Persisted', () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<Persisted
    currentUser={currentUser1}
    location={{
      pathname: '/toolbox'
    }}
    signOut={mockFn}
    history={{}}
  />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});
