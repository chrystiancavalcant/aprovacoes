import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import base from '../../base'
import Menu from './elements/Menu'
import Header from './elements/Header'
import ExploreBoxAp from './elements/ExploreBoxAp'

class Campanha extends Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: {},

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
        <section className='newsfeed'>
          <div className='container'>
            <h1>Campanhas</h1>
            <hr />
            <div className='row one-row'>
              <div className='col-lg-12'>
                <Link to='/restrito/campanha'><h4>Assunto</h4></Link>
              </div>
            </div>
            <div className='row top-row'>

              {Object.keys(this.state.posts).map(key => {
                const post = this.state.posts[key]
                return <ExploreBoxAp key={key} post={post} />
              })}

            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Campanha
