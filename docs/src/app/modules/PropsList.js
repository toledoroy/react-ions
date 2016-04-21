import React from 'react';
import style from '../../www/css/props';

class PropsList extends React.Component {
  constructor(props) {
    super(props);
  }
  setDefaultProps() {
    return {
      list: {}
    }
  }
  render() {
    let propsList = Object.keys(this.props.list).map((name) => {
      return (
        <tr>
          <td>{name}</td>
          <td>{this.props.list[name].type.name}</td>
          <td>{this.props.list[name].defaultValue ? this.props.list[name].defaultValue.value : ''}</td>
          <td>{this.props.list[name].description}</td>
        </tr>
      )
    });

    return (
      <table>
        <thead>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </thead>
        <tbody>
          {propsList}
        </tbody>
      </table>
    )
  }
}

export default PropsList;
