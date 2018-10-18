import React from 'react'
import base from './../base'

class Storybox extends Component {
  constructor(props){
    super(props)

    base.bindToState('anuncios', {
      context: this,
      state: 'anuncios',

      queries:{
        limitToLast: 3
      }
    })
  }
  render(){
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
             <div className=""><img className="img-circle" src={ anuncios.foto } alt="user" /></div>
             <h4>Clifford Agosto</h4>
             <p>2 hours ago</p>
            </div>		  
           </div>
           </a>
          </div>
    ) 
  }
}

export default Storybox