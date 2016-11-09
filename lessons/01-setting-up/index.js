import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import About from './modules/About'
import Home from './modules/Home'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      {/* add it here, as a child of `/` */}
      <IndexRoute component={Home}/>

      {/* add the routes here */}
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
