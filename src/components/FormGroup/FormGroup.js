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

  setInitialState = () => {
    var initialElems = [];
    var elems = this.getFormElems();

    elems.forEach((elem, index) => {
      initialElems = [...initialElems, {index : ''}];
    });

    this.setState({initialElems});
  }

  handleChange = (event) => {
    console.log(this.props.elemIndex);
    this.setState({[this.props.elemIndex]: event.target.value});
  }

  getFormElems = () => {
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

    const formElements = this.getFormElems().map((elems, index) => {
      return React.cloneElement(elems, {
        key: index,
        elemIndex: 'elem_' + index,
        changeCallback: this.handleChange,
        optClass: style.field
      });
    });

    return (
      <form className={formGroupClass}>
        <fieldset>
          {formElements}
        </fieldset>
        <code>{JSON.stringify(this.state)}</code>
      </form>
    )
  }
}

export default FormGroup
