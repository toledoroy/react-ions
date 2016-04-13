import React from 'react';
import { shallow, mount, render } from 'enzyme';
import First from '../src/components/First/First';

describe("First", function() {
  it("contains spec with an expectation", function() {
    expect(shallow(<First />).contains(<div className="foo" />)).toBe(true);
  });
});