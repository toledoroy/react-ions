import React from 'react'
import ReactDOM from 'react-dom'
import Base from './layout/Base'
import Foundations from './pages/Foundations'
import Content from './layout/Content'
import Components from './pages/Components'
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Base}>
      <Route path="/foundations" component={Foundations}/>
        <Route path="/foundations/colors" header="Colors" component={Content}/>
        <Route path="/foundations/typography" header="Typography" component={Content}/>
        <Route path="/foundations/iconography" header="Iconography" component={Content}/>
        <Route path="/foundations/layout" header="Layout" component={Content}/>
      <Route path="/components" component={Components}/>
    </Route>
  </Router>
), document.getElementById('app'))
