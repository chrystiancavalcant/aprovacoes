import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from './elements/Header'
import Menu from './elements/Menu'
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
                    <Link to='/restrito/profile'>
                      <img
                        className='img-fluid img-circle'
                        src='../assets/img/users/13.jpeg'
                        alt='profile'
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <UserProfile />
      </div>
    )
  }
}
export default Profile
