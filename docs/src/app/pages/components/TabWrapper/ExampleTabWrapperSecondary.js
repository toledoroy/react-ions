import React from 'react'
import {TabWrapper, Tab} from 'react-ions/lib/TabWrapper'
import style from './style.scss'

class ExampleTabWrapperSecondary extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <TabWrapper onSelect={this.selectCallback} optClass="secondary">
          <Tab title="All Recent Activity" optTabContentClass={style['tab-content-secondary']}>
            <p>Tab content.</p>
          </Tab>
          <Tab title="Custom Bookmark" optTabContentClass={style['tab-content-secondary']}>
            <p>Tab content.</p>
          </Tab>
          <Tab title="Hello World" optTabContentClass={style['tab-content-secondary']}>
            <p>Tab content.</p>
          </Tab>
        </TabWrapper>
      </div>
    )
  }
}

export default ExampleTabWrapperSecondary
