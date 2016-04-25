import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from '../src/components/Breadcrumb/Breadcrumb';

describe('Breadcrumb', () => {
  let wrapper;

  it('should shallow render itself with proper tags, have default className and appropriate progress bar style', () => {
    const label = 'Commission export';
    wrapper = shallow(<ProgressBar value={processed_actions} denominator={total_actions} label={label} />);
  });
});
