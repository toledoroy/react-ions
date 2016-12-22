import React from 'react'
import Icon from '../Icon'
import prefix from '../internal/Prefix'
import rawStyle from './style.scss'

const style = prefix(rawStyle)

class TagList extends React.Component {
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
    this.props.onRemove(index)
  }

  renderTags = () => {
    return this.props.tags.map((tag, index) =>
      <li key={index}><span className={style['text']}>{tag[this.props.displayProp]}</span><Icon name='icon-delete-3' onClick={this.removeTag.bind(this, index)} width='12' height='12'/></li>
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

export default TagList
