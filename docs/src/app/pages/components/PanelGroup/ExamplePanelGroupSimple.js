import React from 'react'
import {PanelGroup, Panel, PanelHeader, PanelContent} from 'react-conventions/lib/PanelGroup'
import RadioGroup from 'react-conventions/lib/Radio/RadioGroup'
import style from './style.scss'

const options = [
  {
    value: 'option_1',
    label: 'Display your own custom message'
  }, {
    value: 'option_2',
    label: 'Display a refer a friend'
  }, {
    value: 'option_3',
    label: 'Show them another survey'
  }, {
    value: 'option_4',
    label: 'Redirect them'
  }
];

const ExamplePanelGroupSimple = () => (
  <div>
    <PanelGroup accordion={true} optClass='simple'>
      <Panel>
        <PanelHeader title='Promoter' contextIcon='icon-arrow-60' />
        <PanelContent>
          <h3>What happens after a promoter submits their score?</h3>
          <RadioGroup
            name="default-radio-group"
            options={options}>
          </RadioGroup>
        </PanelContent>
      </Panel>
      <Panel>
      <PanelHeader title='Passive' contextIcon='icon-arrow-60' />
        <PanelContent>
        </PanelContent>
      </Panel>
      <Panel>
      <PanelHeader title='Detractor' contextIcon='icon-arrow-60' />
        <PanelContent>
        </PanelContent>
      </Panel>
    </PanelGroup>
  </div>
)

export default ExamplePanelGroupSimple
