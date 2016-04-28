import React from 'react'
import style from './style.scss'
import classNames from 'classnames/bind'
import Icon from 'react-conventions/lib/Icon'

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    checked: false,
    disabled: false,
    labelPosition: 'right'
  }

  static propTypes = {
    /**
     * Whether the checkbox is checked.
     */
    checked: React.PropTypes.bool,
    /**
     * Text displayed with the checkbox.
     */
    label: React.PropTypes.string,
    /**
     * Whether the label shouild appear on the right or left.
     */
    labelPosition: React.PropTypes.string,
    /**
     * Optional styles to add to the checkbox.
     */
    optClass: React.PropTypes.string,
    /**
     * Whether the checkbox is disabled.
     */
    disabled: React.PropTypes.bool,
    /**
     * Value provided when checked.
     */
    label: React.PropTypes.string
  };

  componentDidMount() {
    this.refs.checkbox.checked = this.props.checked || false;
    this.refs.checkbox.disabled = this.props.disabled || false;
  }

  render() {
    const cx = classNames.bind(style);
    //var disabledClass = this.props.disabled ? style['checkbox-disabled'] : '';
    var checkboxClass = cx(style['checkbox-component'], this.props.optClass);//, disabledClass);

    return (
      <div className={checkboxClass}>
        <input type="checkbox" ref="checkbox" value={this.props.value}></input>
        <div>
          { this.props.label && this.props.labelPosition === 'left' ? <label className={style['label-left']}>{this.props.label}</label> : null }
          <div className={style['checkbox-input']}>
            <Icon name='icon-check-1-1' />
          </div>
          { this.props.label && this.props.labelPosition === 'right' ? <label className={style['label-right']}>{this.props.label}</label> : null }
        </div>
      </div>
    )
  }
}

export default Checkbox
