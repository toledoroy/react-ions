import React from 'react'
import Button from 'react-ions/lib/components/Button'

const ExampleButtonDefault = () => (
  <div>
    <div className='row' style={{'marginBottom': '2rem'}}>
      <div className='col-xs-12 col-sm-6 col-lg-2'>
        <div>
          <Button optClass='positive'>Positive</Button>
        </div>
      </div>
      <div className='col-xs-12 col-sm-6 col-lg-2'>
        <div>
          <Button optClass='attention'>Attention</Button>
        </div>
      </div>
      <div className='col-xs-12 col-sm-6 col-lg-2'>
        <div>
          <Button optClass='alert'>Alert</Button>
        </div>
      </div>
      <div className='col-xs-12 col-sm-6 col-lg-2'>
        <div>
          <Button>Default</Button>
        </div>
      </div>
      <div className='col-xs-12 col-sm-6 col-lg-2'>
        <div>
          <Button optClass='grey'>Grey</Button>
        </div>
      </div>
    </div>
    <div className='row' style={{'marginBottom': '2rem'}}>
      <div className='col-xs-12 col-sm-6 col-lg-4'>
        <div>
          <Button optClass='large'>Large</Button>
        </div>
      </div>
      <div className='col-xs-12 col-sm-6 col-lg-4'>
        <div>
          <Button optClass='disabled'>Disabled</Button>
        </div>
      </div>
      <div className='col-xs-12 col-sm-6 col-lg-4'>
        <div>
          <Button loading={true}>Loader</Button>
        </div>
      </div>
    </div>
    <div className='row' style={{'marginBottom': '2rem'}}>
      <div className='col-xs-12'>
        <div style={{'width': '100%'}}>
          <Button optClass='fill grey'>Fill</Button>
        </div>
      </div>
    </div>
  </div>
)

export default ExampleButtonDefault
