import React from 'react';
import { shallow, mount } from 'enzyme';
import {PanelGroup, Panel, PanelHeader, PanelContent} from '../src/components/PanelGroup'

describe('Panel Header', () => {
  it('should shallow render itself', () => {
    const wrapper = shallow(<PanelGroup><Panel><PanelHeader title='Rating' contextIcon='icon-star-1' />a<PanelContent optClass='rating-specific'><p>{content.lorum1}</p></PanelContent></Panel></PanelGroup>);
    const panelHeader = wrapper.childAt(0).childAt(0);
    // https://github.com/airbnb/enzyme/issues/306
    console.log(panelHeader.html());
    expect(panelHeader.find('div')).to.have.length(1);
    expect(panelHeader.hasClass('panel-header')).to.equal(true);
  });

});


/* wrapper
<div class="panel-group">
  <div class="panel">
    <div class="panel-header">
      <div>
        <div class="title-group"></div>
        <div class="toggle-icon">
          <svg name="icon-delete-1" height="12" width="12"><use xlink:href="/_karma_webpack_//13909255dfd9387151d92875db15505a.svg#icon-delete-1"></use></svg>
        </div>
      </div>
    </div>
    <div class="panel-content"></div>
  </div>
</div>
*/

/*
<div class="panel"><div class="panel-header"><div><div class="title-group"></div><div class="toggle-icon"><svg name="icon-delete-1" height="12" width="12"><use xlink:href="/_karma_webpack_//13909255dfd9387151d92875db15505a.svg#icon-delete-1"></use></svg></div></div></div><div class="panel-content"></div></div>
 */
