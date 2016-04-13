import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Foo from '../src/components/First';

describe("First", function() {
  it("contains spec with an expectation", function() {
    expect(shallow(<First />).contains(<div className="foo" />)).toBe(true);
  });
});