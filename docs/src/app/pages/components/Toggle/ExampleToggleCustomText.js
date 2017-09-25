import React from 'react'
import Toggle from 'react-ions/lib/components/Toggle'

const ExampleToggleCustomText = () => (
  <div>
    <div>
      <Toggle hasText={true}/>
    </div>
    <div>
      <Toggle label='Toggle with Label' hasText={true}/>
    </div>
    <div>
      <Toggle label='Toggle with Label and Custom Text' text={['Negative', 'Affirmative']} hasText={true}/>
    </div>
  </div>
)

export default ExampleToggleCustomText
