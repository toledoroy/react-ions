import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'

class FormGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
  }

  componentWillMount = () => {
    this.setInitialState();
  }

  static propTypes = {
    /**
     * A configuration object of name/value pairs
     * that correspond to the form fields
     */
     schema: React.PropTypes.object
  }

  setInitialState = () => {
    let fields = {};
    let value = null;
    let schema = this.props.schema;

    for (value in schema) {
      fields[value] = schema[value];
    }

    this.setState({fields: fields});
  }

  handleChange = (event) => {
    // let val;
    //
    // if (event.type.checkbox) {
    //   val = event.target.checked
    //   console.log(event.target);
    // } else {
    //   val = event.target.value
    // }

    var newField = Object.assign({}, this.state.fields[event.target.name], {value: event.target.value});
    var previousState = Object.assign({}, this.state);
    var newState = previousState.fields[event.target.name] = newField;

    this.setState(newState);
  }

  getElements = () => {
    const elems = [];

    React.Children.forEach(this.props.children, (elem) => {
      if (React.isValidElement(elem)) {
        elems.push(elem);
      }
    });
    return elems;
  }

  render() {
    const cx = classNames.bind(style);
    var formGroupClass = style['form-group'];

    const elements = this.getElements().map((elem, index) => {
      let name = elem.props.name;
      let field = this.state.fields;

      if (name in field) {
        return React.cloneElement(elem, {
          key: index,
          elemIndex: index,
          changeCallback: this.handleChange,
          optClass: style.field,
          value: field[name].value
        })
      } else {
        return elem;
      }
    });

    return (
      <form className={formGroupClass}>
        <fieldset className={style.fieldset}>
          {elements}
        </fieldset>
        <code><pre>{JSON.stringify(this.state.fields, null, 2)}</pre></code>
      </form>
    )
  }
}

export default FormGroup
