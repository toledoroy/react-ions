import React from 'react'
import highlight from 'highlight.js'
import Icon from 'global/components/Icon'
import style from '../../www/css/code-example'
import marked from 'marked'

class CodeExample extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
    code: React.PropTypes.string.isRequired,
    component: React.PropTypes.bool,
    description: React.PropTypes.string,
    title: React.PropTypes.string,
  };

  componentWillMount() {
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
      }
    });
  }

  componentDidMount() {
    highlight.initHighlightingOnLoad();
  }

  render() {
    return (
      <div className={style['code-example-wrap']}>
        <header><h3>{this.props.title}</h3> <Icon name='icon-arrow-37' width='16' height='16' fill='white' /></header>
        <div className={style.body}>
          <pre>
            <code class='lang-js' className={'markdown-body'}>
              <div dangerouslySetInnerHTML={{__html: marked(this.props.code)}} />
            </code>
          </pre>
        </div>
        <p className={style.description}>{this.props.description}</p>
      </div>
    );
  }
};

export default CodeExample;
