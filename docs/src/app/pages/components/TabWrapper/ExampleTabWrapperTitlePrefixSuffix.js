import React from 'react'
import { TabWrapper, Tab } from 'react-ions/lib/components/TabWrapper'
import Badge from 'react-ions/lib/components/Badge'
import classNames from 'classnames/bind'
import style from './style.scss'

class ExampleTabWrapperTitlePrefixSuffix extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const cx = classNames.bind(style)
    const iconGreenClasses = cx(style['tab-suffix'], style['icon-green'])
    const iconDollarClasses = cx(style['tab-prefix'], style['icon-green'])

    return (
      <div>
        <TabWrapper onSelect={this.selectCallback} optClass="secondary">
          <Tab title="All Recent Activity" count={1723} optTabContentClass={style['tab-content-secondary']}>
            <p>Tab 1 content.</p>
          </Tab>
          <Tab
            title="Custom Bookmark"
            titlePrefix={<Badge optClass={iconDollarClasses} theme='border' icon='icon-dollar-bag-1' />}
            titleSuffix={<Badge optClass={style['tab-suffix']} theme='sky' text='5' />}
            count={50}
            optTabContentClass={style['tab-content-secondary']}>
            <p>Tab 2 content.</p>
          </Tab>
          <Tab
            title="Hello World"
            titlePrefix={<Badge optClass={style['tab-prefix']} theme='sky' text='5' />}
            titleSuffix={<Badge optClass={iconGreenClasses} theme='border' icon='icon-check-1-1' />}
            optTabContentClass={style['tab-content-secondary']}>
            <p>Tab 3 content.</p>
          </Tab>
        </TabWrapper>
      </div>
    )
  }
}

export default ExampleTabWrapperTitlePrefixSuffix
