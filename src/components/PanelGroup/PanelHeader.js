import React from 'react'
import Icon from '../Icon'
import style from './style.scss'

class PanelHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    /**
     * A title to be passed into the header
     */
    title: React.PropTypes.string,
    /**
     * An icon to be passed to the left of the header
     */
    contextIcon: React.PropTypes.string
  }

  handleClick = (event) => {
    if (this.props.onHeaderClick) {
      this.props.onHeaderClick(event, this);
    }
  }

  render() {
    return (
      <div className={style['panel-header']} onClick={this.handleClick}>
        {!this.props.children ?
          <div>
            <div className={style['title-group']}>
              {this.props.contextIcon ? <Icon name={this.props.contextIcon} height='14' width='14' /> : null}
              {this.props.title ? <h4>{this.props.title}</h4> : null}
            </div>
            <div className={style['toggle-icon']}>
              <Icon name='icon-delete-1' height='12' width='12' />
            </div>
          </div>
          :
          this.props.children
        }
      </div>
    )
  }
}

export default PanelHeader
