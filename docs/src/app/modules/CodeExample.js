import React from 'react'
import highlight from 'highlight.js'
import Icon from 'global/components/Icon'
import styles from '../../www/css/code-example'
import marked from 'marked'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles);

class CodeExample extends React.Component {
  constructor(props) {
    super(props);

    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight: function (code) {
        return highlight.highlightAuto(code).value;
      }
    });
  }

  static propTypes = {
    markup: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    title: React.PropTypes.string,
  }

  state = {
    expand: false
  }

  componentDidMount() {
    highlight.initHighlightingOnLoad();
  }

  handleToggle = () => {
    this.setState({expand: !this.state.expand});
  }

  createDescription() {
    return {
      __html: marked(this.props.description)
    };
  }

  generateRawMarkup() {
    return {
      __html: marked(this.props.markup)
    };
  }

  render() {
    let toggleClass = cx({
      'body': true,
      'open': this.state.expand
    })

    return (
      <div className={styles['code-example-wrap']}>
        <header>
          <h3>{this.props.title}</h3>
          <Icon name='icon-arrow-37' width='16' height='16' fill='white' onClick={this.handleToggle} />
        </header>
        <div className={styles.component}>
          {this.props.children}
        </div>
        <div className={toggleClass}>
          <pre>
            <code className='hljs'>
              <div dangerouslySetInnerHTML={this.generateRawMarkup()} />
            </code>
          </pre>
        </div>
        <div className={styles.description} dangerouslySetInnerHTML={this.createDescription()} />
      </div>
    );
  }
};

export default CodeExample;
