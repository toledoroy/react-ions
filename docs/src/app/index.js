// Core
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// Routes
import Routes from './Routes'

ReactDOM.render((
  <Router history={browserHistory}>
    {Routes}
  </Router>
), document.getElementById('app'))
