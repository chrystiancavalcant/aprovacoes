import React, { Component } from 'react'

class UserProfile extends Component{
    render(){
        return(

            <div>
            <section className="details">
            <div className="container">
             <div className="row">
              <div className="col-lg-12">
               
                <div className="details-box row">
                 <div className="col-lg-9">
                 <div className="content-box">
                   <h4>Anna Morgan <i className="fa fa-check"></i></h4>
                   <p>Welcome to the offical account of Anna Morgan. Success is in the PIXELS, <span className="hashtag">Upload</span></p>
                   <small><span>www.fromrio.com.br</span></small>
                 </div>
                 </div> 
                 <div className="col-lg-3">
                 <div className="follow-box">
                  <a href="/campanha" className="kafe-btn kafe-btn-mint"><i className="fa fa-check"></i> Criar Campanha</a>
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
        }
        export default UserProfile