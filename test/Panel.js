import React from 'react';
import { shallow } from 'enzyme';
import {Panel, PanelHeader, PanelContent} from '../src/components/PanelGroup'

describe('Panel', () => {
  it('should shallow render itself', () => {
    const wrapper = shallow(<Panel title='Rating' contextIcon='icon-star-1'><PanelHeader optClass='rating-specific'></PanelHeader><PanelContent></PanelContent></Panel>);
    // expect(wrapper.props().title).to.equal('Rating');
    // expect(panelHeader.hasClass('panel-header')).to.equal(true);
    // expect(panelContent.hasClass('panel-content')).to.equal(true);
  });
});


/* wrapper
<div class="panel">
  <div class="panel-header"><div>
  <div class="title-group"></div>
  <div class="toggle-icon">
    <svg name="icon-delete-1" height="12" width="12"><use xlink:href="/_karma_webpack_//13909255dfd9387151d92875db15505a.svg#icon-delete-1"></use></svg>
  </div>
</div>
</div><div class="panel-content"></div></div>
*/
