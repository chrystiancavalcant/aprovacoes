import React, {Component} from 'react'

class Stories extends Component {   
    render()  {
        return  (
<div>
<section class="chat">
 <div class="container">
  <div class="row">
  
   <div class="messages-box">
    <div class="row">
     <div class="col-lg-4 col-md-12 no-pdd">
      <div class="messages-container">
      
       <div class="message-header">
        <div class="message-title">
         <h4>Messages</h4>
        </div>
        <div class="search-area">  
         <div class="input-field">
          <input placeholder="Search" type="text" />>
          <i class="fa fa-search"></i>
         </div>
        </div>		 
       </div>
                           
       <div class="messages-list">
         <ul>
          <li class="active">
           <div class="user-message-details">
            <div class="user-message-img">
             <img src="assets/img/users/6.jpg" class="img-responsive img-circle" alt="" />
             <span class="user-online"></span>
            </div>
            <div class="user-message-info">
             <h4>Anthony McCartney</h4>
             <p>Lorem ipsum dolor ...</p>
             <span class="time-posted">1:55 PM</span>
            </div>
            <span class="message-notification">1</span>
           </div>
          </li>
          <li>
           <div class="user-message-details">
            <div class="user-message-img">
             <img src="assets/img/users/10.jpg" class="img-responsive img-circle" alt=""/>
            </div>
            <div class="user-message-info">
             <h4>Sean Coleman</h4>
             <p>Lorem ipsum dolor ...</p>
             <span class="time-posted">1:55 PM</span>
            </div>
           </div>
          </li>
          <li>
           <div class="user-message-details">
            <div class="user-message-img">
             <img src="assets/img/users/3.jpg" class="img-responsive img-circle" alt="" />
            </div>
            <div class="user-message-info">
             <h4>Vanessa Wells</h4>
             <p>Lorem ipsum dolor ...</p>
             <span class="time-posted">1:55 PM</span>
            </div>
           </div>
          </li>
          <li>
           <div class="user-message-details">
            <div class="user-message-img">
             <img src="assets/img/users/4.jpg" class="img-responsive img-circle" alt="" />
            </div>
            <div class="user-message-info">
             <h4>Clifford Graham</h4>
             <p>Lorem ipsum dolor ...</p>
             <span class="time-posted">1:55 PM</span>
            </div>
           </div>
          </li>
          <li>
           <div class="user-message-details">
            <div class="user-message-img">
             <img src="assets/img/users/5.jpg" class="img-responsive img-circle" alt="" />
            </div>
            <div class="user-message-info">
             <h4>Grace Karen</h4>
             <p>Lorem ipsum dolor ...</p>
             <span class="time-posted">1:55 PM</span>
            </div>
           </div>
          </li>
          <li>
           <div class="user-message-details">
            <div class="user-message-img">
             <img src="assets/img/users/14.jpg" class="img-responsive img-circle" alt="" />
            </div>
            <div class="user-message-info">
             <h4>Alex Grantte</h4>
             <p>Lorem ipsum dolor ...</p>
             <span class="time-posted">1:55 PM</span>
            </div>
           </div>
          </li>
          <li>
           <div class="user-message-details">
            <div class="user-message-img">
             <img src="assets/img/users/7.jpg" class="img-responsive img-circle" alt="" />
            </div>
            <div class="user-message-info">
             <h4>Anna Morgan</h4>
             <p>Lorem ipsum dolor ...</p>
             <span class="time-posted">1:55 PM</span>
            </div>
           </div>
          </li>
          <li>
           <div class="user-message-details">
            <div class="user-message-img">
             <img src="assets/img/users/8.jpg" class="img-responsive img-circle" alt="" />
            </div>
            <div class="user-message-info">
             <h4>Francis Long</h4>
             <p>Lorem ipsum dolor ...</p>
             <span class="time-posted">1:55 PM</span>
            </div>
           </div>
          </li>
          <li>
           <div class="user-message-details">
            <div class="user-message-img">
             <img src="assets/img/users/9.jpg" class="img-responsive img-circle" alt="" />
            </div>
            <div class="user-message-info">
             <h4>Eleanor Harper</h4>
             <p>Lorem ipsum dolor ...</p>
             <span class="time-posted">1:55 PM</span>
            </div>
           </div>
          </li>
                                   
         </ul>
       </div>
       
      </div>
     </div>
     
     <div class="col-lg-8 col-md-12 pd-right-none pd-left-none">
      <div class="conversation-box">
      
       <div class="conversation-header">
        <div class="user-message-details">
         <div class="user-message-img">
          <img src="assets/img/users/6.jpg" class="img-responsive img-circle" alt="" />
         </div>
         <div class="user-message-info">
          <h4>John Doe</h4>
          <p>Online</p>
         </div>
        </div>
        <a href="#" title=""><i class="fa fa-ellipsis-v"></i></a>
       </div>
       
       <div class="conversation-container">

        <div class="convo-box pull-right">
         <div class="convo-area">
          <div class="convo-message">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
          </div>
          <span>Sat, Aug 23, 1:08 PM</span>
         </div>
         <div class="convo-img">
          <img src="assets/img/users/2.jpg" alt="" class="img-responsive img-circle" />
         </div>
        </div>

        <div class="convo-box convo-left">
         <div class="convo-area convo-left">
          <div class="convo-message">
           <p>Cras ultricies ligula.</p>
          </div>
          <span>5 minutes ago</span>
         </div>
         <div class="convo-img">
          <img src="assets/img/users/6.jpg" alt="" class="img-responsive img-circle" />
         </div>
        </div>

        <div class="convo-box pull-right">
         <div class="convo-area">
          <div class="convo-message">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
          </div>
          <span>Sat, Aug 23, 1:08 PM</span>
         </div>
         <div class="convo-img">
          <img src="assets/img/users/2.jpg" alt="" class="img-responsive img-circle" />
         </div>
        </div>

        <div class="convo-box convo-left">
         <div class="convo-area convo-left">
          <div class="convo-message">
           <p>Lorem ipsum dolor sit amet</p>
          </div>
          <span>2 minutes ago</span>
         </div>
         <div class="convo-img">
          <img src="assets/img/users/6.jpg" alt="" class="img-responsive img-circle" />
         </div>
        </div>

        <div class="convo-box pull-right">
         <div class="convo-area">
          <div class="convo-message">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
          </div>
          <span>Sat, Aug 23, 1:08 PM</span>
         </div>
         <div class="convo-img">
          <img src="assets/img/users/2.jpg" alt="" class="img-responsive img-circle" />
         </div>
        </div>

        <div class="convo-box convo-left">
         <div class="convo-area convo-left">
          <div class="convo-message">
           <p>Typing...</p>
          </div>
          <span>2 minutes ago</span>
         </div>
         <div class="convo-img">
          <img src="assets/img/users/6.jpg" alt="" class="img-responsive img-circle" />
         </div>
        </div>
                               
       </div>
       <div class="type_messages">  
        <div class="input-field">
         <textarea placeholder="Type something &amp; press enter"></textarea>
         <ul class="imoji">
          <li><a href="#"><i class="fa fa-smile"></i></a></li>
          <li><a href="#"><i class="fa fa-image"></i></a></li>
          <li><a href="#"><i class="fa fa-paperclip"></i></a></li>
         </ul>
        </div>
       </div>
                           
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
export default Stories