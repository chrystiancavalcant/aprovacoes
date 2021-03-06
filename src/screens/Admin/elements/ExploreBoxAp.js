import React, { Component } from 'react'

import Comment from './Comment'


class ExploreBoxAp extends Component {
    render(){
        return(
            <div>
            <div className="col-lg-4">
            <a href="/campanha">
            <div className="explorebox" 
              style={
                  {   background: `linear-gradient( rgba(34,34,34,0.2), rgba(34,34,34,0.2)), url(${'../assets/img/posts/10.jpg'}) no-repeat`,
                     'backgroundSize': 'cover',
                     'backgroundPosition': 'center center',
                     'WebkitBackgroundSize': 'cover',
                     'MozBackgroundSize': 'cover',
                     'OBackgroundSize': 'cover'}}>

             <div className="explore-top">
              <div className="explore-like"><i className="fa fa-heart"></i> <span>645</span></div>
              <div className="explore-circle pull-right"></div>
             </div>		  
             <div className="explore-body">
              <div className=""><img className="img-circle" src="../assets/img/users/8.jpg" alt="user" /></div>
             </div>		  
            </div>
            </a>
            <Comment/>
            </div>
            </div>
        )
    }
}
export default ExploreBoxAp