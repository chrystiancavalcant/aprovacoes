import React, { Component } from 'react'

import Revisar from './elements/Revisar'
import Header from './elements/Header'
import Menu from './elements/Menu'

const statuses = {
  approved: 'Aprovado',
  disapproved: 'Reprovado',
  review: 'Revisando'
}

class Historico extends Component {
  render () {
    return (
      <div>
        <Header />
        <Menu />
        <div className='container'>
          <h1>Status</h1>
          <h4><select ref='status'>
            {Object.keys(statuses).map(key => (
              <option key={key} value={key}>{statuses[key]}</option>
            ))}
          </select><br />
          </h4>
          <br /> 
          <hr/>
          <div className='row top-row'>
              <Revisar />
              <Revisar />
              <Revisar />
              <Revisar />
            </div>
        </div>
      </div>
    )
  }
}
export default Historico
