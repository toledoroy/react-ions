import React from 'react'
import AlertSystem from '../AlertSystem'

describe('AlertSystem', () => {
  describe('render', () => {
    it('should render an empty alert system', () => {
      expect(shallow(<AlertSystem alerts={[]} />)).toMatchSnapshot()
    })

    it('should render an alert system with alerts', () => {
      const clock = sinon.useFakeTimers(1588161287485 * 1000)
      const alerts = [
        { content: 'Test success' },
        { type: 'warning', content: 'Test warning' },
        { type: 'info', content: 'Test info' },
        { type: 'danger', content: 'Test danger' }
      ]
  
      expect(shallow(<AlertSystem alerts={alerts}/>)).toMatchSnapshot()

      clock.restore()
    })

    it('should upadate when the alerts prop changes', () => {
      const clock = sinon.useFakeTimers(1588161287485 * 1000)
      const alerts = [{ content: 'Test success' }]
      const wrapper = shallow(<AlertSystem alerts={alerts}/>)

      expect(wrapper).toMatchSnapshot()

      alerts.push({ type: 'warning', content: 'Test warning' })
      wrapper.setProps({ alerts })

      expect(wrapper).toMatchSnapshot()

      clock.restore()
    })
  })

  describe('getAlerts', () => {
    it('should get alerts that are not hidden', () => {
      const alerts = [
        { content: 'Test success' },
        { type: 'warning', content: 'Test warning', hidden: true },
        { type: 'info', content: 'Test info', hidden: true },
        { type: 'danger', content: 'Test danger' }
      ]
  
      const getAlerts = shallow(<AlertSystem alerts={alerts}/>).instance().getAlerts
      expect(getAlerts()).toMatchSnapshot()
    })
  })

  describe('removeAlert', () => {
    it('should hide an alert and call its onClose callback if provided', () => {
      const alerts = [
        { key: 'ALERT_KEY', content: 'Test success', onClose: sinon.spy() }
      ]
      const wrapper = shallow(<AlertSystem alerts={alerts}/>)
      const removeAlert = wrapper.instance().removeAlert
      const alert = { key: 'ALERT_KEY' }

      expect(wrapper.state('alerts')[0]).toMatchSnapshot()
      
      removeAlert(alert)
      expect(wrapper.state('alerts')[0]).toMatchSnapshot()
      expect(alerts[0].onClose.calledOnce).toBe.true
      expect(alerts[0].onClose.calledWithExactly(alert)).toBe.true
    })
  })
})
