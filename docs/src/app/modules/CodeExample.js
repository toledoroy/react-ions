import React from 'react'
import hljs from 'highlight.js'
import Icon from 'react-conventions/lib/Icon'
import styles from '../../www/css/code-example'
import marked from 'marked'
import shallowCompare from 'react-addons-shallow-compare'
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

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidMount() {
    hljs.initHighlightingOnLoad();
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
    const text = `\`\`\`js
${this.props.markup}
    \`\`\``;

    return {
      __html: marked(text)
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
          <button onClick={this.handleToggle}><Icon name='icon-arrow-37' width='16' height='16' fill='white' /></button>
        </header>
        <div className={styles.component}>
          {this.props.children}
        </div>
        <div className={toggleClass}>
          <pre>
            <code className={styles.hljs}>
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
