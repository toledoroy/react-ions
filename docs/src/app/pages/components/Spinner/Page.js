import React from 'react'
import PropsList from 'private/modules/PropsList';
import docs from '!!docgen!react-conventions/lib/Spinner/Spinner';
import CodeExample from 'private/modules/CodeExample'
import ExampleSpinnerDefault from './ExampleSpinnerDefault'
import exampleSpinnerDefaultCode from '!raw!./ExampleSpinnerDefault'
import style from 'private/css/content'

const description = {
  spinnerDefault: 'This is the `spinner component`.'
};

const SpinnerPage = (props) => {
  return (
    <div>
      <div className={style.content}>
        <div className={style.block}>
          <CodeExample
            title='Spinner Example'
            description={description.spinnerDefault}
            markup={exampleSpinnerDefaultCode}
          >
            <ExampleSpinnerDefault />
          </CodeExample>
        </div>
        <div className={style.block}>
          <h3>Props</h3>
          <PropsList list={docs[0].props} />
        </div>
      </div>
    </div>
  )
}

export default SpinnerPage;
