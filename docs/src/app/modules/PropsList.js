import React from 'react';
import style from 'private/css/props';

class PropsList extends React.Component {
  static defaultProps = {
    list: {}
  }

  constructor(props) {
    super(props);
  }

  render() {
    let propsList = Object.keys(this.props.list).map((name) => {
      return (
        <tr key={name}>
          <td>{name}</td>
          <td className={style['cell-monospaced']}>{this.props.list[name].type.name}</td>
          <td className={style['cell-monospaced']}>{this.props.list[name].defaultValue ? this.props.list[name].defaultValue.value : ''}</td>
          <td>{this.props.list[name].description}</td>
        </tr>
      )
    });

    return (
      <div className={style.wrapper}>
        <table className={style.table}>
          <thead>
            <tr>
              <th className={style['cell-md']}>Name</th>
              <th className={style['cell-sm']}>Type</th>
              <th className={style['cell-sm']}>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {propsList}
          </tbody>
        </table>
      </div>
    )
  }
}

export default PropsList
