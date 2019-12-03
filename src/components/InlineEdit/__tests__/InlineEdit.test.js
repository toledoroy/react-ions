import React from 'react'
import InlineEdit from '../InlineEdit'
import Icon from '../../Icon/Icon'

describe('InlineEdit', () => {

  it('should render a span and buttons', () => {
    const inlineEdit = mount(<InlineEdit name='test' value='test value' isEditing={true} />)
    expect(inlineEdit).toMatchSnapshot()
  })

  it('should not render buttons', () => {
    const inlineEdit = mount(<InlineEdit name='test' value='test value' />)
    expect(inlineEdit).toMatchSnapshot()
  })

  it('should not trigger the callback if the edit was canceled', () => {
    const changeCallback = sinon.spy()
    const inlineEdit = mount(<InlineEdit name='test' isEditing={true} value='test value' changeCallback={changeCallback} />)

    inlineEdit.update()
    inlineEdit.instance().handleSave()

    expect(changeCallback.called).toBeFalsy()
  })

  it('should not trigger the callback if the value hasn\'t changed', () => {
    const changeCallback = sinon.spy()
    const inlineEdit = mount(<InlineEdit name='test' isEditing={true} value='test value' changeCallback={changeCallback} />)
    const trigger = inlineEdit.find('.inline-button-wrapper').at(0).childAt(0)

    trigger.simulate('click')

    expect(changeCallback.called).toBeFalsy()
  })

  it('should be readonly', () => {
    const spy = sinon.spy()
    const inlineEdit = mount(<InlineEdit name='test' changeCallback={spy} value='test value' readonly />)
    const editTrigger = inlineEdit.childAt(0)

    expect(inlineEdit).toMatchSnapshot()

    editTrigger.simulate('click')

    expect(spy.called).toBeFalsy()
  })

  it('should have an inline icon and label', () => {
    const inlineEdit = mount(<InlineEdit name='test' value='test value' label='Email' icon='md-mail' />)
    expect(inlineEdit).toMatchSnapshot()
  })

  it('should set max-width for the edit component', () => {
    let inlineEdit = mount(<InlineEdit name='test' value='test value' />)

    expect(inlineEdit.state().inlineEditMaxWidth).toEqual('calc(100% - 0px)')

    inlineEdit = mount(<InlineEdit name='test' value='test value' label='Email' icon='md-mail' />)

    expect(inlineEdit.state().inlineEditMaxWidth).not.toEqual('calc(100% - 0px)')
  })

  it('should render a select field', () => {
    const options = [
      { label: 'Item 1', value: 'item_1' },
      { label: 'Item 2', value: 'item_2' },
      { label: 'Item 3', value: 'item_3' },
      { label: 'Item 4', value: 'item_4' }
    ]

    const inlineEdit = mount(<InlineEdit name='test' value='item_3' type='select' options={options} />)
    expect(inlineEdit).toMatchSnapshot()
  })

  it('should update the state when an item is selected', () => {
    const options = [
      { label: 'Item 1', value: 'item_1' },
      { label: 'Item 2', value: 'item_2' },
      { label: 'Item 3', value: 'item_3' },
      { label: 'Item 4', value: 'item_4' }
    ]

    const inlineEdit = mount(<InlineEdit name='test' value='item_3' type='select' options={options} />)
    expect(inlineEdit.state().value).toEqual('item_3')

    inlineEdit.instance().handleSave({ target: { value: 'item_1' } })
    expect(inlineEdit.state().value).toEqual('item_1')
  })

  it('should trigger the change callback when an item is selected', () => {
    const changeCallback = sinon.spy()
    const options = [
      { label: 'Item 1', value: 'item_1' },
      { label: 'Item 2', value: 'item_2' },
      { label: 'Item 3', value: 'item_3' },
      { label: 'Item 4', value: 'item_4' }
    ]

    const inlineEdit = mount(<InlineEdit name='test' value='item_3' type='select' options={options} changeCallback={changeCallback} />)
    expect(inlineEdit.state().value).toEqual('item_3')

    inlineEdit.instance().handleSave({ target: { value: 'item_1' } })

    expect(inlineEdit.state().value).toEqual('item_1')
    expect(changeCallback.calledWithExactly({ target: { name: 'test', value: 'item_1' } })).toBeTruthy()

    inlineEdit.instance().handleSave({ target: { value: 'item_1' } })
    expect(changeCallback.calledTwice).toBeFalsy()
  })

  it('should set classes on the select field', () => {
    const options = [
      { label: 'Item 1', value: 'item_1' },
      { label: 'Item 2', value: 'item_2' },
      { label: 'Item 3', value: 'item_3' },
      { label: 'Item 4', value: 'item_4' }
    ]

    let inlineEdit = mount(<InlineEdit name='test' value='item_3' type='select' options={options} />)
    let field = inlineEdit.instance().getSelect()

    expect(field.props.optClass).toEqual('inline-edit-select')

    inlineEdit = mount(<InlineEdit name='test' value='item_3' type='select' options={options} loading={true} />)
    field = inlineEdit.instance().getSelect()

    expect(field.props.optClass).toEqual('inline-edit-select loading')
  })

  it('should render a datepicker', () => {
    const inlineEdit = mount(<InlineEdit name='test' value='2005-04-26' type='date' />)

    expect(inlineEdit).toMatchSnapshot()
  })

  it('should update the state when date is updated', () => {
    const inlineEdit = mount(<InlineEdit name='test' value='2005-04-26' type='date' />)
    expect(inlineEdit.state().value).toEqual('2005-04-26')

    inlineEdit.instance().handleSave({ target: { value: '2007-02-06' } })
    expect(inlineEdit.state().value).toEqual('2007-02-06')
  })

  it('should trigger the change callback when when date is updated', () => {
    const changeCallback = sinon.spy()
    const inlineEdit = mount(<InlineEdit name='test' value='2005-04-26' type='date' changeCallback={changeCallback} />)

    expect(inlineEdit.state().value).toEqual('2005-04-26')

    inlineEdit.instance().handleSave({ target: { value: '2007-02-06' } })

    expect(inlineEdit.state().value).toEqual('2007-02-06')
    expect(changeCallback.calledWithExactly({ target: { name: 'test', value: '2007-02-06' } })).toBeTruthy()

    inlineEdit.instance().handleSave({ target: { value: '2007-02-06' } })
    expect(changeCallback.calledTwice).toBeFalsy()
  })

  it('should set classes on the datepicker', () => {
    let inlineEdit = mount(<InlineEdit name='test' value='2005-04-26' type='date' />)
    let field = inlineEdit.instance().getDatepicker()

    expect(field.props.optClass).toEqual('inline-edit-date')

    inlineEdit = mount(<InlineEdit name='test' value='2005-04-26' type='date' loading={true} />)
    field = inlineEdit.instance().getDatepicker()

    expect(field.props.optClass).toEqual('inline-edit-date loading')
  })

})