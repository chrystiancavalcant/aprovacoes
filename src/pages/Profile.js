import React, { Component } from 'react'

import Header from '../components/Header'
/*import Comment from '../components/Comment'*/
import Menu from '../components/Menu'
/*import ModalExploreBox from '../components/ModalExploreBox'*/


class Profile extends Component {
    render()  {
    return  (
        <div>
        
      <Header />
        <Menu />

        <br/><br/><br/><br/><br/>
       <section className="profile">
       </section>
       <section className="user-profile">
        <div className="container-fluid">
         <div className="row">
          <div className="col-lg-12">
             <div className="post-content">
              <div className="author-post text-center">
               <a href="/"><img className="img-fluid img-circle" src="assets/img/users/13.jpeg" alt="profile" /></a>
              </div>
             </div>		
          </div>
         </div>
        </div>
       </section>
       <section className="details">
        <div className="container">
         <div className="row">
          <div className="col-lg-12">
            <div className="details-box row">
             <div className="col-lg-9">
             <div className="content-box">
               <h4>Nome da empresa<i className="fa fa-check"></i></h4>
               <p>Bem vindo ao sistema de aprovações da FromRio <span className="hashtag">/Uploads</span></p>
               <small><span>www.fromrio.com.br</span></small>
             </div>
             </div> 
             <div className="col-lg-3">
             <div className="follow-box">
              <a href="/" className="kafe-btn kafe-btn-mint"><i className=""></i> Upload</a>
             </div>
             </div>
            </div>
          </div>
         </div>
        </div>
       </section>
       <section className="newsfeed">
      <div className="container">
      <div class="row one-row">
	    <div class="col-lg-12">
	     <a href=""><h4>Pendente de Aprovação</h4></a>
		</div>
	   </div>
	   <div className="row top-row">
     <div className="col-lg-3">
    <div className="tr-section">
     <div className="tr-post">
      <div className="entry-header">
       <div className="entry-thumbnail">
        <a href="#"><img className="img-fluid" src="assets/img/posts/30.jpg" alt="Image" /></a>
       </div>
        </div>
      <div className="post-content">
       <div className="author-post text-center">
        <a href="#"><img className="img-fluid rounded-circle" src="assets/img/users/2.jpg" alt="Image" /></a>
       </div>
     <div className="card-content">
      <h4>Alex Grantte</h4>
        <span>@alex</span>
     </div>
      <a href="" className="kafe-btn kafe-btn-mint-small "> Aprovar
      </a>
      <a href="" className="kafe-btn kafe-btn-mint-small "> Revisar
      </a>		  
      </div>							
     </div>
      </div>
   </div>
     <div className="col-lg-3">
    <div className="tr-section">
     <div className="tr-post">
      <div className="entry-header">
       <div className="entry-thumbnail">
        <a href="#"><img className="img-fluid" src="assets/img/posts/27.jpg" alt="Image" /></a>
       </div>
        </div>
      <div className="post-content">
       <div className="author-post text-center">
        <a href="#"><img className="img-fluid rounded-circle" src="assets/img/users/3.jpg" alt="Image" /></a>
       </div>
     <div className="card-content">
      <h4>Anna Morgan</h4>
        <span>@anna</span>
     </div>
     <a href="" className="kafe-btn kafe-btn-mint-small "> Aprovar
     </a>
     <a href="" className="kafe-btn kafe-btn-mint-small "> Revisar
     </a>	  
      </div>							
     </div>
      </div>
   </div>
     <div className="col-lg-3">
    <div className="tr-section">
     <div className="tr-post">
      <div className="entry-header">
       <div className="entry-thumbnail">
        <a href="#"><img className="img-fluid" src="assets/img/posts/28.jpg" alt="Image" /></a>
       </div>
        </div>
      <div className="post-content">
       <div className="author-post text-center">
        <a href="#"><img className="img-fluid rounded-circle" src="assets/img/users/6.jpg" alt="Image" /></a>
       </div>
     <div className="card-content">
      <h4>Sean Coleman</h4>
        <span>@sean</span>
     </div>
     <a href="" className="kafe-btn kafe-btn-mint-small "> Aprovar
     </a>
     <a href="" className="kafe-btn kafe-btn-mint-small "> Revisar
     </a>		  
      </div>								
     </div>
      </div>
   </div>
     <div className="col-lg-3">
    <div className="tr-section">
     <div className="tr-post">
      <div className="entry-header">
       <div className="entry-thumbnail">
        <a href="#"><img className="img-fluid" src="assets/img/posts/31.jpg" alt="Image" /></a>
       </div>
        </div>
      <div className="post-content">
       <div className="author-post text-center">
        <a href="#"><img className="img-fluid rounded-circle" src="assets/img/users/15.jpg" alt="Image" /></a>
       </div>
     <div className="card-content">
      <h4>Vanessa Wells</h4>
        <span>@vanessa</span>
     </div>
     <a href="" className="kafe-btn kafe-btn-mint-small "> Aprovar
     </a>
     <a href="" className="kafe-btn kafe-btn-mint-small "> Revisar
     </a>		  
      </div>							
     </div>
      </div>
   </div>
    </div>
    </div>
       </section>
       <section className="newsfeed">
      <div className="container">
      <div class="row one-row">
	    <div class="col-lg-12">
	     <a href=""><h4>Em revisão</h4></a>
		</div>
	   </div>
	   <div className="row top-row">
     <div className="col-lg-3">
    <div className="tr-section">
     <div className="tr-post">
      <div className="entry-header">
       <div className="entry-thumbnail">
        <a href="#"><img className="img-fluid" src="assets/img/posts/30.jpg" alt="Image" /></a>
       </div>
        </div>
      <div className="post-content">
       <div className="author-post text-center">
        <a href="#"><img className="img-fluid rounded-circle" src="assets/img/users/2.jpg" alt="Image" /></a>
       </div>
     <div className="card-content">
      <h4>Alex Grantte</h4>
        <span>@alex</span>
     </div>
     <a href="" className="kafe-btn kafe-btn-mint-small "> Aprovar
     </a>
     <a href="" className="kafe-btn kafe-btn-mint-small "> Revisar
     </a>		  
      </div>							
     </div>
      </div>
   </div>
     <div className="col-lg-3">
    <div className="tr-section">
     <div className="tr-post">
      <div className="entry-header">
       <div className="entry-thumbnail">
        <a href="#"><img className="img-fluid" src="assets/img/posts/27.jpg" alt="Image" /></a>
       </div>
        </div>
      <div className="post-content">
       <div className="author-post text-center">
        <a href="#"><img className="img-fluid rounded-circle" src="assets/img/users/3.jpg" alt="Image" /></a>
       </div>
     <div className="card-content">
      <h4>Anna Morgan</h4>
        <span>@anna</span>
     </div>
     <a href="" className="kafe-btn kafe-btn-mint-small "> Aprovar
      </a>
      <a href="" className="kafe-btn kafe-btn-mint-small "> Revisar
      </a>		  
      </div>							
     </div>
      </div>
   </div>
     <div className="col-lg-3">
    <div className="tr-section">
     <div className="tr-post">
      <div className="entry-header">
       <div className="entry-thumbnail">
        <a href="#"><img className="img-fluid" src="assets/img/posts/28.jpg" alt="Image" /></a>
       </div>
        </div>
      <div className="post-content">
       <div className="author-post text-center">
        <a href="#"><img className="img-fluid rounded-circle" src="assets/img/users/6.jpg" alt="Image" /></a>
       </div>
     <div className="card-content">
      <h4>Sean Coleman</h4>
        <span>@sean</span>
     </div>
     <a href="" className="kafe-btn kafe-btn-mint-small "> Aprovar
     </a>
     <a href="" className="kafe-btn kafe-btn-mint-small "> Revisar
     </a>		  
      </div>								
     </div>
      </div>
   </div>
     <div className="col-lg-3">
    <div className="tr-section">
     <div className="tr-post">
      <div className="entry-header">
       <div className="entry-thumbnail">
        <a href="#"><img className="img-fluid" src="assets/img/posts/31.jpg" alt="Image" /></a>
       </div>
        </div>
      <div className="post-content">
       <div className="author-post text-center">
        <a href="#"><img className="img-fluid rounded-circle" src="assets/img/users/15.jpg" alt="Image" /></a>
       </div>
     <div className="card-content">
      <h4>Vanessa Wells</h4>
        <span>@vanessa</span>
     </div>
     <a href="" className="kafe-btn kafe-btn-mint-small "> Aprovar
     </a>
     <a href="" className="kafe-btn kafe-btn-mint-small "> Revisar
     </a>		  
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
export default Profile