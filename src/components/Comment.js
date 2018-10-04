import React from 'react'

const Comment = (props) => {
    return (
  <div>      
  <div className="comment-img">
  <img src="assets/img/users/17.jpeg" className="img-responsive img-circle" alt="Image"/>
 </div>
 <div className="comment-text">
  <strong><a href="/">Anthony McCartney</a></strong>
  <p>Hello this is a test comment.</p> <span className="date sub-text">on December 5th, 2016</span>
 </div>
 </div>
    )
}
export default Comment