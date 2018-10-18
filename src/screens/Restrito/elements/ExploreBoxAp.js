import React from 'react'
import { Link } from 'react-router-dom'

import Comment from './Comment'

const ExploreBoxAp = ({post}) => {
    return (
      <div>
        <div className='col-lg-4'>
          <Link to='/restrito/{post}'>
            <div
              className='explorebox'
              style={{
                background: `linear-gradient( rgba(34,34,34,0.2), rgba(34,34,34,0.2)), url(${post.foto}) no-repeat`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                WebkitBackgroundSize: 'cover',
                MozBackgroundSize: 'cover',
                OBackgroundSize: 'cover'
              }}
            >

              <div className='explore-top'>
                <div className='explore-like'>
                  <i className='fa fa-heart' /> <span>645</span>
                </div>
                <div className='explore-circle pull-right' />
              </div>
              <div className='explore-body'>
                <div className=''>
                  <img
                    className='img-circle'
                    src={'https://firebasestorage.googleapis.com/v0/b/publish-4d89b.appspot.com/o/avatar.png?alt=media&token=d65be4a8-07c4-4f28-aa63-fd45bee82c3e'}
                    alt='user'
                  />
                 
                </div>
              </div>
            </div>
          </Link>
          <Comment />
        </div>
      </div>
    )
  }

export default ExploreBoxAp
