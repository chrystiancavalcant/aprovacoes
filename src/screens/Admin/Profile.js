import React, { Component } from 'react'

import Header from './elements/Header'
import Menu from './elements/Menu'
import Revisar from './elements/Revisar'
import ExploreBox from './elements/ExploreBox'
import UserProfile from './elements/UserProfile'

class Profile extends Component {
  render () {
    return (
      <div>
        <Header />
        <Menu />
        <br /><br /><br /><br /><br />
        <section className='user-profile'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='post-content'>
                  <div className='author-post text-center'>
                    <a href='/'>
                      <img
                        className='img-fluid img-circle'
                        src='../assets/img/users/13.jpeg'
                        alt='profile'
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <UserProfile />
        <section className='details'>
          <div className='container'>
            <div className='row' />
          </div>
        </section>
        <section className='newsfeed'>
          <div className='container'>
            <div className='row one-row'>
              <div className='col-lg-12'>
                <a href=''><h4>Pendente de Aprovação</h4></a>
              </div>
            </div>
            <hr/>
            <div className='row top-row'>
              <Revisar />
              <Revisar />
              <Revisar />
              <Revisar />
            </div>
          </div>
        </section>
        <section className='newsfeed'>
          <div className='container'>
            <div className='row one-row'>
              <div className='col-lg-12'>
                <a href=''><h4>Em revisão</h4></a>
              </div>
            </div>
            <hr/>
            <div className='row top-row'>
              <Revisar />
              <Revisar />
              <Revisar />
              <Revisar />
            </div>
          </div>
        </section>
        <section className='newsfeed'>
          <div className='container'>
            <div className='row one-row'>
              <div className='col-lg-12'>
                <a href=''><h4>Aprovado</h4></a>
              </div>
            </div>
            <hr/>
            <div className='row top-row'>
              <ExploreBox />
              <ExploreBox />
              <ExploreBox />
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Profile