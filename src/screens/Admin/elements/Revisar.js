import React, { Component } from 'react'

class Revisar extends Component {
  /*constructor(props){
    super(props)

    
  }*/
  render () {
    return (
      <div>
        <div className='col-lg-3'>
          <div className='tr-section'>
            <div className='tr-post'>
              <div className='entry-header'>
                <div className='entry-thumbnail'>
                  <a href='/campanha'>
                    <img
                      className='img-fluid'
                      src='../assets/img/posts/30.jpg'
                      alt='Image1'
                    />
                  </a>
                </div>
              </div>
              <div className='post-content'>
                <div className='author-post text-center'>
                  <a href='/campanha'>
                    <img
                      className='img-fluid rounded-circle'
                      src='../assets/img/users/2.jpg'
                      alt='Image2'
                    />
                  </a>
                </div>
                <div className='card-content'>
                  <h4>Alex Grantte</h4>
                  <span>@alex</span>
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
                <a className='modal-comment' href='#/'>
                  <i className='fa fa-comments' />
                </a>
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
                    placeholder='Write your comment...'
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Revisar
