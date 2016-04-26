import React from 'react'
import CodeExample from 'private/modules/CodeExample'
import styles from 'private/css/content'
import ExampleButtonDefault from './ExampleButtonDefault'
import exampleButtonDefaultCode from '!raw!./ExampleButtonDefault'

const description = {
  buttonDefault: 'This is the `button component` as it appears by default.'
};

class ButtonsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className={styles.content}>
          <div className={styles.block}>
            <h3>Examples</h3>
            <CodeExample
              title='Default Button'
              description={description.buttonDefault}
              markup={exampleButtonDefaultCode}
            >
              <ExampleButtonDefault />
            </CodeExample>
          </div>
        </div>
      </div>
    )
  }
}

export default ButtonsPage;
