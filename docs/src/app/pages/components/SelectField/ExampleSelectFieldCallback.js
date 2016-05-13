import React from 'react'
import SelectField from 'react-conventions/lib/SelectField/SelectField'
import style from './style' 

class ExampleSelectFieldCallback extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    status: null
  }

  handleChange = (option) => {
    this.setState({status: 'Chosen option is \'' + option.display + '\''});
  }

  render() {
    const options = [
      {value: 0, display: 'test 1'},
      {value: 1, display: 'test 2'}
    ];

    return(
      <div>
        <SelectField
          options={options}
          valueProp='value'
          displayProp='display'
          changeCallback={this.handleChange}>
        </SelectField>
        <code className={style['callback-status']}>{this.state.status}</code>
      </div>
    )
  }
}

export default ExampleSelectFieldCallback
