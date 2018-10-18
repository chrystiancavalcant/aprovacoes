import React, { Component } from 'react'

import base from '../../base'
import Revisar from './elements/Revisar'
import Header from './elements/Header'
import Menu from './elements/Menu'

const statuses = {
  approved: 'Aprovado',
  disapproved: 'Reprovado',
  review: 'Revisando'
}

class Historico extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts:{},

      context: this,
      state: 'posts'
    }

    base.bindToState('posts', {
      context: this,
      state: 'posts'
    })
  }
  render () {
    return (
      <div>
        <Header />
        <Menu />
        <div className='container'>
          <h5>Pesquisar por Status: <select ref='status'>
          {Object.keys(statuses).map(key => (
            <option key={key} value={key}>{statuses[key]}</option>
          ))}
        </select><br /></h5>
          <br />
          <hr />
          <div className='row top-row'>
          {Object.keys(this.state.posts).map(key => {
            const post = this.state.posts[key]
            return <Revisar key={key} post={post}/>
          })}
          
          </div>
        </div>
      </div>
    )
  }
}
export default Historico
