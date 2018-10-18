import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import base from '../../base'
import EstoriesBox from './elements/EstoriesBox'
import Header from './elements/Header'
import Menu from './elements/Menu'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      clientes: [],

      context: this,
      state: 'clientes'
    }

    base.bindToState('clientes', {
      context: this,
      state: 'clientes'
    })
  }
  render () {
    return (
      <div>
      <Header />
      <Menu />
         <section className='newsfeed'>
          <div className='container'>
            <div className='follow-box'>
              <Link to='restrito/cadastro' className='kafe-btn kafe-btn-mint'>
                <i className='fa fa-check' /> Novo Cliente
              </Link>
            </div>
            <hr />
            <div className='row one-row'>
              <div className='col-lg-12'>
                <Link to='/restrito'><h4>Clientes</h4></Link>
              </div>
            </div>
            <hr />
            <div className='row top-row'>

              {Object.keys(this.state.clientes).map(key => {
                const cliente = this.state.clientes[key]
                return <EstoriesBox key={key} cliente={cliente} />
              })}

            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Home


