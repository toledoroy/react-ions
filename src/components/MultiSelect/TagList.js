import React from 'react'
import Icon from '../Icon'
import style from './style.scss'

class Taglist extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    tags: []
  }

  static propTypes = {
    /**
     * Tags to display.
     */
    tags: React.PropTypes.array.isRequired,
    /**
     * Which field in the tag will be displayed.
     */
    displayProp: React.PropTypes.string.isRequired,
    /**
     * A callback function to be called when a tag is removed.
     */
    onRemove: React.PropTypes.func.isRequired
  }

  removeTag = (index) => {
    if (this.props.onRemove) {
      this.props.onRemove(index)
    }
  }

  renderTags = () => {
    return this.props.tags.map((tag, index) =>
      <li key={index}>{tag[this.props.displayProp]}<Icon name='icon-delete-3' onClick={this.removeTag.bind(this, index)} width='12' height='12'/></li>
    )
  }

  render() {
    return (
      <ul className={style.taglist}>
        {this.renderTags()}
      </ul>
    )
  }
}

export default Taglist
