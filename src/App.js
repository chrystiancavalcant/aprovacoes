import React, { Component } from 'react'
import {
  BrowserRouter
    as Router,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'

import Admin from './screens/Admin/'
import store from './redux'
import Login from './screens/Login'
import Restrito from './screens/Restrito'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>

            <Route path='/' exact render={() => <Login />} />
            <Route path='/admin' component={Admin} />
            <Route path='/restrito' component={Restrito} />

          </div>
        </Router>
      </Provider>
    )
  }
}
export default App
