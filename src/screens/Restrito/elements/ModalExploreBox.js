import React from 'react'


const ModalExploreBox = (props) => {
    return(
    <div className="col-lg-4">
    <a href="#myModal" data-toggle="modal">

    <div className="explorebox" 
      style="background: linear-gradient( rgba(34,34,34,0.2), rgba(34,34,34,0.2)), url('assets/img/posts/25.jpg') no-repeat;
             background-size: cover;
             background-position: center center;
             -webkit-background-size: cover;
             -moz-background-size: cover;
             -o-background-size: cover;">

     <div className="explore-top">
      <div className="explore-like"><i className="fa fa-heart"></i> <span>324</span></div>
      <div className="explore-circle pull-right"><i className="far fa-bookmark"></i></div>
     </div>		  
    </div>
    </a>
   </div>
    )
}

export default ModalExploreBox