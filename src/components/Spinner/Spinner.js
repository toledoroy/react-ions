import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import styles from './styles.css'

export const StyledSpan = styled.span`${props => props.css}`

class Spinner extends React.Component {
  constructor(props) {
    super(props)

    if (props.optClass && process.env.NODE_ENV !== 'production') {
      console.warn('Dropdown: Use of optClass will be deprecated as of react-ions 6.0.0, please use `className` instead')
    }
  }

  state = {
    loading: false
  }

  static propTypes = {
    /**
     * Delay before showing spinner (in milliseconds)
     */
    delay: PropTypes.number,
    /**
     * Whether the spinner is displayed
     */
    loading: PropTypes.bool,
    /**
     * CSS positioning options for the loader. By default, the spinner will be positioned
     * in the center of any element with relative positioning.
     */
    position: PropTypes.oneOf(['fixed', 'inline']),
    /**
     * The type of loader you want to display.
     */
    type: PropTypes.oneOf(['spinner-dots', 'spinner-bounce', 'spinner-circular']).isRequired,
    /**
     * The hex code of the background color.
     */
    backgroundColor: PropTypes.string,
    /**
     * The hex code of the loader color.
     */
    color: PropTypes.string,
    /**
     * Optional styles to add to the spinner.
     */
    optClass: PropTypes.string,
    /**
     * A class name to be used for local styles or integrations (required to support styled-components)
     */
    className: PropTypes.string,
    /**
     * The size of the spinner.
     */
    size: PropTypes.string
  }

  UNSAFE_componentWillMount = () => {
    this.getLoadingState(this.props)
  }

  UNSAFE_componentWillReceiveProps = nextProps => {
    this.getLoadingState(nextProps)
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return (
      nextState.loading !== this.state.loading
    )
  }

  getLoadingState = props => {
    if (props.loading && props.delay) {
      this.timeout = setTimeout(() => {
        this.setState({ loading: true })
      }, props.delay)
    } else {
      clearTimeout(this.timeout)
      this.setState({ loading: props.loading || false })
    }
  }

  innerHtml = () => {
    if (this.props.type === 'spinner-dots') {
      return (
        <span>
          <span className='dot1'></span>
          <span className='dot2'></span>
        </span>
      )
    }

    if (this.props.type === 'spinner-circular') {
      return (
        <div className='sc-inner'>
          <div className='sc-inner-animation'>
            <svg width={this.props.size || '20'} height={this.props.size || '20'} strokeWidth='16.00' viewBox='-3.00 -3.00 106.00 106.00'>
              <path
                className='sc-inner-track'
                d='M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90'>
              </path>
              <path
                className='sc-inner-head'
                d='M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90'
                pathLength='280'
                strokeDasharray='280 280'
                strokeDashoffset='210'>
              </path>
            </svg>
          </div>
        </div>
      )
    }

    return (
      <span>
        <span className='bounce1'></span>
        <span className='bounce2'></span>
        <span className='bounce3'></span>
      </span>
    )
  }

  render = () => {
    const { backgroundColor, className, color, optClass, position, size, type } = this.props;
    const { loading } = this.state;

    console.log("STYLE", styles({ loading, hidden: !loading, position: position || 'absolute', color, size, backgroundColor }));

    return (
      <StyledSpan
        css={styles({ loading, hidden: !loading, position: position || 'absolute', color, size, backgroundColor })}
        className={[optClass, className].join(' ').trim()}
      >
        <span className={type}>
          {this.innerHtml()}
        </span>
      </StyledSpan>
    )
  }
}

export default Spinner
