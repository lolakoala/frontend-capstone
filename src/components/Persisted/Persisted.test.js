import React from "react";
import Persisted from './Persisted.js';
import { shallow, configure } from "enzyme";
import currentUser1 from '../../mockData/currentUser1.js';
// import Adapter from 'enzyme-adapter-react-16';
//
// configure({ adapter: new Adapter() });


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
