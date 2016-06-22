import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import DatePicker from '../src/components/DatePicker/DatePicker'
import moment from 'moment'

describe('DatePicker', () => {
  const oldDate = '2017-07-07'
  const newDate = '2019-03-03'
  const defaultFormat = 'YYYY-MM-DD'
  let wrapper, selectField

  it('should shallow render itself', () => {
    wrapper = shallow(<DatePicker value={oldDate} />)
    expect(wrapper.find('.datepicker-component')).to.have.length(1)

    selectField = wrapper.find('SelectField')
    expect(selectField).to.have.length(3)
  })

  it('should have current date by default', () => {
    wrapper = mount(<DatePicker />)
    expect(wrapper.find('.datepicker-component')).to.have.length(1)

    selectField = wrapper.find('SelectField')
    expect(selectField).to.have.length(3)
    expect(wrapper.state('value')).to.equal(moment().format(defaultFormat))
  })

  it('should update the state when the value property changes', () => {
    wrapper = mount(<DatePicker value={oldDate} />)

    expect(wrapper.state('value')).to.equal(oldDate)

    wrapper.setProps({ value: newDate })
    wrapper.update()

    expect(wrapper.state('value')).to.equal(newDate)
  })

  it('should run the changeCallback on changing a month', () => {
    let result = ''
    const callback = function(event) {
      result = event
    }
    wrapper = mount(<DatePicker value={oldDate} changeCallback={callback} />)

    // open <ul>
    wrapper.childAt(0).childAt(2).simulate('click')
    // click <li>
    wrapper.childAt(0).childAt(2).childAt(0).simulate('click')

    const firstMonth = '2017-01-07'
    expect(result.target.value).to.equal(firstMonth)
    expect(wrapper.state('value')).to.equal(firstMonth)
  })

  it('should run the changeCallback on changing a day', () => {
    let result = ''
    const callback = function(event) {
      result = event
    }
    wrapper = mount(<DatePicker value={oldDate} changeCallback={callback} />)

    // open <ul>
    wrapper.childAt(1).childAt(2).simulate('click')
    // click <li>
    wrapper.childAt(1).childAt(2).childAt(0).simulate('click')

    const firstDay = '2017-07-01'
    expect(result.target.value).to.equal(firstDay)
    expect(wrapper.state('value')).to.equal(firstDay)
  })

  it('should run the changeCallback on changing a year', () => {
    let result = ''
    const callback = function(event) {
      result = event
    }
    wrapper = mount(<DatePicker value={oldDate} changeCallback={callback} />)

    // open <ul>
    wrapper.childAt(2).childAt(2).simulate('click')
    // click <li>
    wrapper.childAt(2).childAt(2).childAt(0).simulate('click')

    const firstYear = moment().subtract(10, 'year').format('YYYY')+'-07-07'
    expect(result.target.value).to.equal(firstYear)
    expect(wrapper.state('value')).to.equal(firstYear)
  })

  it('should not result in an error if changeCallback is not defined', () => {
    const spy = sinon.spy(console, 'error')
    wrapper = mount(<DatePicker value={oldDate} />)

    // open <ul>
    wrapper.childAt(0).childAt(2).simulate('click')
    // click <li>
    wrapper.childAt(0).childAt(2).childAt(0).simulate('click')

    expect(spy.called).to.be.false
    spy.restore()
  })

  it('should change to max month & day if selected are greater than max value on selecting last year', () => {
    let result = ''
    const callback = function(event) {
      result = event
    }
    const maxCalc = { month: '5', day: '20', year: '+1'}
    const minCurrent = { month: 'current', day: 'current', year: 'current'}
    const date = moment().month(11).date(31).format(defaultFormat)

    wrapper = mount(<DatePicker value={date} min={minCurrent} max={maxCalc} changeCallback={callback} />)

    // set last year
    wrapper.childAt(2).childAt(2).simulate('click')
    // click <li>
    wrapper.childAt(2).childAt(2).childAt(1).simulate('click')

    const firstYear = moment().add(1, 'year').format('YYYY')+'-06-20'
    expect(result.target.value).to.equal(firstYear)
    expect(wrapper.state('value')).to.equal(firstYear)
  })

  it('should change to min month & day if selected are lower than min value on selecting first year', () => {
    let result = ''
    const callback = function(event) {
      result = event
    }
    const minCalc = { month: '5', day: '20', year: '-1'}
    const maxCurrent = { month: 'current', day: 'current', year: 'current'}
    const date = moment().month(0).date(1).format(defaultFormat)

    wrapper = mount(<DatePicker value={date} min={minCalc} max={maxCurrent} changeCallback={callback} />)

    // set first year
    wrapper.childAt(2).childAt(2).simulate('click')
    // click <li>
    wrapper.childAt(2).childAt(2).childAt(0).simulate('click')

    const firstYear = moment().subtract(1, 'year').format('YYYY')+'-06-20'
    expect(result.target.value).to.equal(firstYear)
    expect(wrapper.state('value')).to.equal(firstYear)
  })

  it('should show correct date when passing custom format and run the changeCallback on changing a year', () => {
    let result = ''
    const callback = function(event) {
      result = event
    }

    const format = 'DD-MM-YYYY'
    const date = '22-06-2016'
    const minCurrent = { month: 'current', day: 'current', year: 'current'}

    wrapper = mount(<DatePicker value={date} min={minCurrent} format={format} changeCallback={callback} />)

    // open <ul>
    wrapper.childAt(2).childAt(2).simulate('click')
    // click <li>
    wrapper.childAt(2).childAt(2).childAt(1).simulate('click')

    const newDate = '22-06-'+moment().add(1, 'year').format('YYYY')
    expect(result.target.value).to.equal(newDate)
    expect(wrapper.state('value')).to.equal(newDate)
  })

})