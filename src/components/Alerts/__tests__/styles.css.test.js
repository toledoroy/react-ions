import { alertSystemWrapper, alertWrapper, countdownBar } from '../styles.css'

describe('Alerts::Styles', () => {
  describe('alertSystemWrapper', () => {
    it('should return styles for alerts that do not slide in from the right', () => {
      expect(alertSystemWrapper()).toMatchSnapshot()
    })

    it('should return styles for alerts that slide in from the right', () => {
      expect(alertSystemWrapper(true)).toMatchSnapshot()
    })
  })
  
  describe('alertWrapper', () => {
    it('should return styles for a success alert', () => {
      expect(alertWrapper('success')).toMatchSnapshot()
    })

    it('should return styles for a warning alert', () => {
      expect(alertWrapper('warning')).toMatchSnapshot()
    })

    it('should return styles for an info alert', () => {
      expect(alertWrapper('info')).toMatchSnapshot()
    })

    it('should return styles for a danger alert', () => {
      expect(alertWrapper('danger')).toMatchSnapshot()
    })

    it('should return styles for an alert that is closable', () => {
      expect(alertWrapper('success', true)).toMatchSnapshot()
    })

    it('should return styles for an alert that slides in from the right', () => {
      expect(alertWrapper('success', true, true)).toMatchSnapshot()
    })
  })

  describe('countdownBar', () => {
    it('should return countdown bar styles for a success alert', () => {
      expect(countdownBar('success', 1000)).toMatchSnapshot()
    })

    it('should return countdown bar styles for a warning alert', () => {
      expect(countdownBar('warning', 2000)).toMatchSnapshot()
    })

    it('should return countdown bar styles for an info alert', () => {
      expect(countdownBar('info', 3000)).toMatchSnapshot()
    })

    it('should return countdown bar styles for a danger alert', () => {
      expect(countdownBar('danger', 4000)).toMatchSnapshot()
    })
  })
})
