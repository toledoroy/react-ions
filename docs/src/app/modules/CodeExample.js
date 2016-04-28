import React from 'react'
import ReactDOM from 'react'
import hljs from 'highlight.js'
import Button from 'react-conventions/lib/Button'
import Icon from 'react-conventions/lib/Icon'
import styles from 'private/css/code-example'
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
      smartypants: false
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
    this.highlightCode();
  }

  handleToggle = () => {
    this.setState({expand: !this.state.expand});
  }

  createDescription() {
    return {
      __html: marked(this.props.description)
    };
  }

  highlightCode() {
    var ref = this.refs.example;
    var nodes = ref.querySelectorAll('pre code');
    if (nodes.length > 0) {
      for (var i = 0; i < nodes.length; i = i+1) {
        hljs.highlightBlock(nodes[i]);
      }
    }
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
    let codeExampleClass = cx({
      'body': true,
      'open': this.state.expand
    })
    let codeExampleBtnClass = cx({
      'active': this.state.expand
    })

    return (
      <div className={styles['code-example-wrap']}>
        <header>
          <h3>{this.props.title}</h3>
          <Button onClick={this.handleToggle} optClass={codeExampleBtnClass}>
            <div className={styles['button-icon-wrap']}>
              <Icon name='icon-arrow-67' width='12' height='12' fill='white' />
              <Icon name='icon-arrow-68' width='12' height='12' fill='white' />
            </div>
          </Button>
        </header>
        <div className={codeExampleClass}>
          <div ref='example' className={styles.hljs} dangerouslySetInnerHTML={this.generateRawMarkup()} />
        </div>
        <div className={styles.component}>
          {this.props.children}
        </div>
        <div className={styles.description} dangerouslySetInnerHTML={this.createDescription()} />
      </div>
    );
  }
};

export default CodeExample
