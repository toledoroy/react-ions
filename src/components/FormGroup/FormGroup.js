import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'

class FormGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
  }

  static propTypes = {
    /**
     * A configuration object of name/value pairs
     * that correspond to the form fields
     */
     schema: React.PropTypes.object
  }

  componentWillMount = () => {
    this.setInitialState();
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

  getElements(children) {
    return React.Children.map(children, child => {
      let childProps = {};
      const name = child.props.name;
      const fields = this.state.fields;

      if (name in fields) {
        if (React.isValidElement(child)) {
          childProps = {
            changeCallback: this.handleChange,
            optClass: style.field,
            value: fields[name].value
          };
        }
      } else {
        return;
      }

      if (child.props) {
        childProps.children = this.getElements(child.props.children);
        return React.cloneElement(child, childProps);
      }

      return child;
    }, this);
  }

  render() {
    const cx = classNames.bind(style);
    var formGroupClass = style['form-group'];

    const elements = this.getElements(this.props.children);

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
