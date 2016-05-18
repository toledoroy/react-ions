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
    var items = [];
    var elems = this.getFormElems();

    elems.forEach((elem, index) => {
      var elemName = elem.type.name.toLowerCase();
      items = [...items, {[elemName + '_'+ index] : ''}];
    });

    this.setState({items});
  }

  handleChange = (event) => {
    console.log(this);
    this.setState({[`${this.elemIndex}_Value`]: event.target.value});
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

    const formElements = this.getFormElems().map((elem, index) => {
      return React.cloneElement(elem, {
        key: index,
        elemIndex: index,
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
