import React from 'react'
import { Link } from 'react-router-dom'

const EstoriesBox = ({cliente}) =>{
    return (
      <div>
        <div className='col-lg-4'>
          <Link to={`/profile/ver`}>
            <div
              className='storybox'
              style={{
                background: `linear-gradient( rgba(34,34,34,0.78), rgba(34,34,34,0.78)), url(${'assets/img/posts/24.jpg'}) no-repeat`,
                'backgroundSize': 'cover',
                'backgroundPosition': 'center center',
                'WebkitBackgroundSize': 'cover',
                'MozBackgroundSize': ' cover',
                'OBackgroundSize': ' cover'
              }}
            >
              <div className='story-body text-center'>
                <div className=''>
                  <img
                    className='img-circle'
                    src='assets/img/users/6.jpg'
                    alt='user'
                  />
                </div>
                <h4> {cliente.empresa} </h4>
                <p>{cliente.nome}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
  }

export default EstoriesBox
