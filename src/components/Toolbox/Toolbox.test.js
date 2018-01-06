import React from "react";
import Toolbox from './Toolbox.js';
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Toolbox', () => {
  const wrapper = shallow(<Toolbox />);

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should match snap', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have list', () => {
    const list = wrapper.find('List');

    expect(list.length).toEqual(1);
  });

  it('should have subheader', () => {
    const sub = wrapper.find('Subheader');

    expect(sub.length).toEqual(1);
  });

  it('should have 6 list items', () => {
    const items = wrapper.find('ListItem');

    expect(items.length).toEqual(6);
  });
});
