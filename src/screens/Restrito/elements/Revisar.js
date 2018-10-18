import React from 'react'
import { Link } from 'react-router-dom'

const Revisar = ({post}) => {
    return (
      <div>
        <div className='col-lg-3'>
          <div className='tr-section'>
            <div className='tr-post'>
              <div className='entry-header'>
                <div className='entry-thumbnail'>
                  <Link to='/restrito/campanha'>
                    <img
                      className='img-fluid'
                      src={post.foto}
                      alt='Image1'
                    />
                  </Link>
                </div>
              </div>
              <div className='post-content'>
                <div className='author-post text-center'>
                  <Link to='/restrito/campanha'>
                    <img
                      className='img-fluid rounded-circle'
                      src='../assets/img/users/2.jpg'
                      alt='Image2'
                    />
                  </Link>
                </div>
                <div className='card-content'>
                  <h4>{post.assunto}</h4>
                  <span>{post.status}</span>
                </div>
                <div className='card-content' />
              </div>
            </div>
          </div>
          <div className='modal-meta-bottom'>
            <ul>
              <li>
                <a className='modal-like' href='#/'><i className='fa fa-heart' /></a>
                <span className='modal-one'> 786,286</span>
                {' '}
                |
                {' '}
                <Link className='modal-comment' to='#/'>
                  <i className='fa fa-comments' />
                </Link>
                <span> 786,286</span>
                {' '}
              </li>
              <li>
                <span className='thumb-xs'>
                  <img
                    className='img-responsive img-circle'
                    src='../assets/img/users/13.jpeg'
                    alt='Image3'
                  />
                </span>
                <div className='comment-body'>
                  <input
                    className='form-control input-sm'
                    type='text'
                    placeholder='Escreva seu comentário...'
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
export default Revisar
