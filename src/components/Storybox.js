import React from 'react'


const Storybox = (props) => {
    return(
<div className="col-lg-4">
           <a href="/">

           <div className="storybox" 
             style=" background: linear-gradient( rgba(34,34,34,0.78), rgba(34,34,34,0.78)), url('assets/img/posts/9.jpg') no-repeat;
                    background-size: cover;
                    background-position: center center;
                    -webkit-background-size: cover;
                    -moz-background-size: cover;
                    -o-background-size: cover; ">

            <div className="story-body text-center">
             <div className=""><img className="img-circle" src="assets/img/users/10.jpg" alt="user" /></div>
             <h4>Clifford Graham</h4>
             <p>2 hours ago</p>
            </div>		  
           </div>
           </a>
          </div>
    ) 
  }

  export default Storybox