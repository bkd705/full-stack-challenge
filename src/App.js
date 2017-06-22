import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import IndexHelper from './lib/IndexHelper'
import Navigation from './components/Navigation'

const history = createHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="react-app">
          <Navigation />
          <Route exact path="/" component={IndexHelper} />
        </div>
      </Router>
    )
  }
}

export default App
