import React from 'react'
import Alert from '../Alert'

describe('Alert', () => {
  describe('render', () => {
    it('should render a default alert (success)', () => {
      expect(shallow(<Alert timeout={5000}>Test alert</Alert>)).toMatchSnapshot()
    })
  
    it('should render a success alert', () => {
      expect(shallow(<Alert type='success' timeout={5000}>Test alert</Alert>)).toMatchSnapshot()
    })
  
    it('should render a warning alert', () => {
      expect(shallow(<Alert type='warning' timeout={5000}>Test alert</Alert>)).toMatchSnapshot()
    })
  
    it('should render an info alert', () => {
      expect(shallow(<Alert type='info' timeout={5000}>Test alert</Alert>)).toMatchSnapshot()
    })
  
    it('should render a danger alert', () => {
      expect(shallow(<Alert type='danger' timeout={5000}>Test alert</Alert>)).toMatchSnapshot()
    })
  
    it('should not render the countdown bar if countdownBar prop is set to false', () => {
      expect(shallow(<Alert type='success' timeout={5000} countdownBar={false}>Test alert</Alert>)).toMatchSnapshot()
    })
  
    it('should not render the countdown bar if timeout prop is not provided', () => {
      expect(shallow(<Alert>Test alert</Alert>)).toMatchSnapshot()
    })
  })

  describe('componentDidMount', () => {
    it('should start the timer when mounted', () => {
      const inst = shallow(<Alert>Test alert</Alert>).instance()
      const startTimer = sinon.spy(inst, 'startTimer')

      inst.componentDidMount()
      expect(startTimer.calledOnce).toBe.true
    })
  })

  describe('startTimer', () => {
    it('should not start the timer if the timeout prop is not provided', () => {
      const wrapper = shallow(<Alert>Test alert</Alert>)
      const state = wrapper.state()
      
      wrapper.instance().startTimer()
      expect(wrapper.state()).toEqual(state)
    })

    it('should start the timer if the timeout prop is provided', () => {
      const clock = sinon.useFakeTimers()
      const wrapper = shallow(<Alert timeout={5000}>Test alert</Alert>)
      const inst = wrapper.instance()
      const closeAlert = sinon.spy(inst, 'closeAlert')
      const state = wrapper.state()
      
      inst.startTimer()
      const updatedState = wrapper.state()
      expect(updatedState).not.toEqual(state)
      expect(updatedState).toMatchSnapshot()

      clock.tick(5000)
      expect(closeAlert.calledOnce).toBe.true

      clock.restore()
    })
  })

  describe('pauseTimer', () => {
    it('should not do anything if timer is not set in state', () => {
      const wrapper = shallow(<Alert>Test alert</Alert>)
      const state = wrapper.state()
      
      wrapper.instance().pauseTimer()
      expect(wrapper.state()).toEqual(state)
    })

    it('should pause the timer if timer is set in state', () => {
      const clock = sinon.useFakeTimers()
      const clearTimeout = sinon.spy(clock, 'clearTimeout')
      const wrapper = shallow(<Alert timeout={5000}>Test alert</Alert>)
      const inst = wrapper.instance()
      const state = wrapper.state()

      clock.tick(2000)
      
      inst.pauseTimer()
      const updatedState = wrapper.state()
      expect(updatedState).not.toEqual(state)
      expect(updatedState).toMatchSnapshot()

      expect(clearTimeout.calledOnce).toBe.true

      clock.restore()
    })
  })

  describe('closeAlert', () => {
    it('should not call clearTimeout if timer is not set in state', () => {
      const clock = sinon.useFakeTimers()
      const clearTimeout = sinon.spy(clock, 'clearTimeout')
      const inst = shallow(<Alert>Test alert</Alert>).instance()
      
      inst.closeAlert()

      expect(clearTimeout.called).toBe.false

      clock.restore()
    })

    it('should call clearTimeout if timer is set in state', () => {
      const clock = sinon.useFakeTimers()
      const clearTimeout = sinon.spy(clock, 'clearTimeout')
      const inst = shallow(<Alert timeout={5000}>Test alert</Alert>).instance()
      
      inst.closeAlert()

      expect(clearTimeout.calledOnce).toBe.true

      clock.restore()
    })

    it('should call the onClose prop if provided', () => {
      const clock = sinon.useFakeTimers()
      const clearTimeout = sinon.spy(clock, 'clearTimeout')
      const onClose = sinon.spy()
      const inst = shallow(<Alert timeout={5000} onClose={onClose}>Test alert</Alert>).instance()
      
      inst.closeAlert()

      expect(clearTimeout.calledOnce).toBe.true
      expect(onClose.calledOnce).toBe.true

      clock.restore()
    })
  })
})
