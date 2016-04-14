import React from 'react';
import { shallow, mount, render } from 'enzyme';
import First from '../src/components/First/First';

describe("First", function() {
  it("shallow rendered component should contain div", function() {
    expect(shallow(<First test='test' />).contains(<div className='foo'>Foo</div>)).to.be.true;
  });
});