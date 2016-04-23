import React from 'react'
import Breadcrumb from 'global/components/Breadcrumb'
import CodeExample from 'global/modules/CodeExample'
import ExampleIconDefault from './ExampleIconDefault'
import exampleIconDefaultCode from '!raw!./ExampleIconDefault'
import styles from '../../../../www/css/content'

const description = {
  iconDefault: 'This is the `default icon` description [passed](https://www.getambassador.com) in through a constant.'
};

const IconsPage = () => (
  <div>
    <Breadcrumb routeLocation={location.pathname} />
    <div className={styles.content}>
      <div className={styles.block}>
        <CodeExample
          title='Default Icon'
          description={description.iconDefault}
          code={exampleIconDefaultCode}
        >
          <ExampleIconDefault />
        </CodeExample>
      </div>
    </div>
  </div>
);

export default IconsPage;
