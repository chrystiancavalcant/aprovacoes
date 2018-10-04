import React, { Component } from 'react'
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom'

import Campanha from './pages/Campanha'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Gerenciar from './Admin/gerenciar'
import Permissao from './pages/Permissao';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      
      <Route path='/' exact render={() => <Login /> }/>
      <Route path='/home' component={ Home } />
      <Route path='/profile' component={ Profile } />
      <Route path='/gerenciar' component={ Gerenciar } />
      <Route path='/campanha' component={ Campanha } />
      <Route path='/permissao' component={ Permissao } />
     
      </div>
      </Router>
    )
  }
}

export default App
