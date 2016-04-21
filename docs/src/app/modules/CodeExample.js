import React from 'react';
import Icon from 'global/components/Icon'
import style from '../../www/css/content'
import marked from 'marked'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class CodeExample extends React.Component {
  mixins: [
    PureRenderMixin,
  ],
    
  static propTypes = {
    children: React.PropTypes.node,
    code: React.PropTypes.string.isRequired,
    component: React.PropTypes.bool,
    description: React.PropTypes.string,
    title: React.PropTypes.string,
  };

  render() {
    return (
      <div className={style['code-example']}>
        <header><h3>{this.props.title}</h3> <Icon name='icon-arrow-37' width='16' height='16' /></header>
        <div className={style.body}>
          <code>{this.props.code}</code>
        </div>
      </div>
    );
  }
};

export default CodeExample;
