import React from 'react'
import { Link } from 'react-router-dom'

const UserProfile = () => {
  return (
    <div>
      <section className='details'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>

              <div className='details-box row'>
                <div className='col-lg-9'>
                  <div className='content-box'>
                    <h4>Anna Morgan <i className='fa fa-check' /></h4>
                    <p>
                      Welcome to the offical account of Anna Morgan. Success is in the PIXELS,
                      {' '}
                      <span className='hashtag'>Upload</span>
                    </p>
                    <small><span>www.fromrio.com.br</span></small>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className='follow-box'>
                    <Link
                      to='/restrito/campanha'
                      className='kafe-btn kafe-btn-mint'
                    >
                      <i className='fa fa-check' /> Ver Campanha(s)
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default UserProfile
