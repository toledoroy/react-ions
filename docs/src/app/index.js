import React from 'react'
import ReactDOM from 'react-dom'
import Base from './layout/Base'
import Content from './layout/Content'
import Foundations from './pages/Foundations'
import Home from './pages/Home'
import Components from './pages/Components'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Base}>
      <IndexRoute component={Home} />
      <Route path="/foundations" component={Foundations} />
        <Route path="/foundations/:content" component={Content} />
      <Route path="/components" component={Components} />
    </Route>
  </Router>
), document.getElementById('app'))
