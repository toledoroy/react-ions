import React from 'react'
import Typeahead from 'react-ions/lib/components/Typeahead/Typeahead'
import options from './CountryList'

class ExampleTypeaheadCustomValue extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange = (value) => {
    console.log('Custom value: ', value)
  }

  render() {
    return(
      <Typeahead
        options={options}
        allowCustomValue={true}
        valueProp='countryCode'
        displayProp='countryName'
        name='Custom value'
        changeCallback={this.handleChange}
        placeholder='Add a custom value' />
    )
  }
}

export default ExampleTypeaheadCustomValue
