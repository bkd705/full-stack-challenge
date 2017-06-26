import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IndexHelper from './lib/IndexHelper'
import Navigation from './components/Navigation'
import routes from './config/routes'

class App extends Component {
  render() {
    const routeList = routes.map(route =>
      <Route
        exact={route.exact}
        path={route.path}
        component={route.component}
        key={route.path}
      />
    )
    return (
      <Router>
        <div className="react-app">
          <Navigation />
          <Route exact path="/" component={IndexHelper} />
          {routeList}
        </div>
      </Router>
    )
  }
}

export default App
