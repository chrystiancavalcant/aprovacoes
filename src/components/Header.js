import React from 'react'


const Header = (props) => {
    return(
        <header className="tr-header">
        <nav className="navbar navbar-default">
         <div className="container-fluid">
          <div className="navbar-header">
           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="/navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
           </button>
           <a className="navbar-brand" href="index.html"><i className="fab fa-instagram"></i>FromRio</a>
          </div>
          <div className="navbar-left">
           <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav">
            </ul>
           </div>
          </div>
          <div className="navbar-right">                          
           <ul className="nav navbar-nav">
             <li>
             <div className="search-dashboard">
                 <form>
                      <input placeholder="Search here" type="text" />
                      <button type="submit"><i className="fa fa-search"></i></button>
                 </form>
            </div>							
             </li>
             <li className="dropdown notification-list">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="false" aria-expanded="false">
               <i className="fa fa-bell noti-icon"></i>
               <span className="badge badge-danger badge-pill noti-icon-badge">4</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-lg">
               <div className="dropdown-item noti-title">
                <h6 className="m-0">
                 <span className="pull-right">
                  <a href="/" className="text-dark"><small>Clear All</small></a> 
                 </span>Notification
                </h6>
               </div>
               <div className="slimScrollDiv" style={{position: 'relative', 
               overflow: 'hidden', 
               width:' auto', 
               height: 416.983,}}>

                <div className="slimscroll" style={{'max-height': 230, 
                overflow: 'hidden', 
                width: 'auto', 
                height: 416.983,}}>
                
                 <div id="Slim">
                  <a href="javascript:void(0);" className="dropdown-item notify-item">
                   <div className="notify-icon bg-success"><i className="fa fa-comment"></i></div>
                   <p className="notify-details">Caleb Flakelar commented on Admin<small className="text-muted">1 min ago</small></p>
                  </a>
                  <a href="javascript:void(0);" className="dropdown-item notify-item">
                   <div className="notify-icon bg-success"><i className="fa fa-user-plus"></i></div>
                   <p className="notify-details">Grace Flake followed you.<small className="text-muted">5 hours ago</small></p>
                  </a>
                  <a href="javascript:void(0);" className="dropdown-item notify-item">
                   <div className="notify-icon bg-success"><i className="fa fa-heart"></i></div>
                   <p className="notify-details">Carlos Crouch liked your photo.<small className="text-muted">3 days ago</small></p>
                  </a>
                  <a href="javascript:void(0);" className="dropdown-item notify-item">
                   <div className="notify-icon bg-success"><i className="fa fa-comment"></i></div>
                   <p className="notify-details">Caleb Flakelar commented on Admin<small className="text-muted">4 days ago</small></p>
                  </a>
                  <a href="javascript:void(0);" className="dropdown-item notify-item">
                   <div className="notify-icon bg-success"><i className="fa fa-user-plus"></i></div>
                   <p className="notify-details">Maureen Hilda followed you.<small className="text-muted">7 days ago</small></p>
                  </a>
                  <a href="javascript:void(0);" className="dropdown-item notify-item">
                   <div className="notify-icon bg-success"><i className="fa fa-heart"></i></div>
                   <p className="notify-details">Carlos Crouch liked your photo.<small className="text-muted">13 days ago</small></p>
                  </a>
                 </div>

                 <div className="slimScrollBar" style={{background: 'rgb(158 165 171) none repeat scroll 0% 0%', 
                 width: 8, 
                 position:' absolute', 
                 top: 0, 
                 opacity: 0.4, 
                 display: 'block', 
                 'border-radius': 7, 
                 'z-index': 99, 
                 right: 1,}}></div>

                 <div className="slimScrollRail" style={{width: 8, 
                 height: '100%', 
                 position:' absolute', 
                 top: 0, 
                 display:' none', 
                ' border-radius': 7, 
                 background: 'rgb(51, 51, 51) none repeat scroll 0% 0%',
                 opacity: 0.2, 
                 'z-index': 90, 
                 right: 1,}}></div>

                </div>
               </div>
               <a href="photo_notifications.html" className="dropdown-item text-center notify-all">
                View all <i className="fa fa-arrow-right"></i>
               </a>
              </div>
             </li>
  
             <li className="dropdown notification-list">
              <a className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="/" role="button" aria-haspopup="false" aria-expanded="false">
               <i className="fa fa-envelope noti-icon"></i>
               <span className="badge badge-success badge-pill noti-icon-badge">6</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-lg dropdown-new">
               <div className="dropdown-item noti-title">
                <h6 className="m-0">
                 <span className="float-right">
                  <a href="/" className="text-dark"><small>Clear All</small></a> 
                 </span>Chat
                </h6>
               </div>
  
               <div className="slimScrollDiv" style={{position: 'relative', 
               overflow: 'hidden', 
               width: 'auto', 
               height: 416.983,}}>

                <div className="slimscroll" style={{'max-height': 230,
                overflow:' hidden', 
                width:' auto', 
                height: 416.983,}}>

                 <div id="Slim2">
                  <a href="javascript:void(0);" className="dropdown-item notify-item nav-user">
                   <div className="notify-icon"><img src="assets/img/users/1.jpg" className="img-responsive img-circle" alt="" /> </div>
                   <p className="notify-details">Cristina Pride</p>
                   <p className="text-muted font-13 mb-0 user-msg">Hi, How are you? What about our next meeting</p>
                  </a>
                  <a href="javascript:void(0);" className="dropdown-item notify-item nav-user">
                   <div className="notify-icon"><img src="assets/img/users/2.jpg" className="img-responsive img-circle" alt="" /> </div>
                   <p className="notify-details">Sam Garret</p>
                   <p className="text-muted font-13 mb-0 user-msg">Yeah everything is fine</p>
                  </a>
                  <a href="javascript:void(0);" className="dropdown-item notify-item nav-user">
                   <div className="notify-icon"><img src="assets/img/users/3.jpg" className="img-responsive img-circle" alt="" /> </div>
                   <p className="notify-details">Karen Robinson</p>
                   <p className="text-muted font-13 mb-0 user-msg">Wow that's great</p>
                  </a>
                  <a href="javascript:void(0);" className="dropdown-item notify-item nav-user">
                   <div className="notify-icon"><img src="assets/img/users/4.jpg" className="img-responsive img-circle" alt="" /> </div>
                   <p className="notify-details">Sherry Marshall</p>
                   <p className="text-muted font-13 mb-0 user-msg">Hi, How are you? What about our next meeting</p>
                  </a>
                  <a href="javascript:void(0);" className="dropdown-item notify-item nav-user">
                   <div className="notify-icon"><img src="assets/img/users/5.jpg" className="img-responsive img-circle" alt="" /> </div>
                   <p className="notify-details">Shawn Millard</p>
                   <p className="text-muted font-13 mb-0 user-msg">Yeah everything is fine</p>
                  </a>
                 </div>

                <div className="slimScrollBar" style={
                {background: 'rgb(158 165 171) none repeat scroll 0% 0%', 
                 width: 8, 
                 position: 'absolute', 
                 top: 0, 
                 opacity: 0.4, 
                 display: 'block', 
                 'border-radius': 7, 
                 'z-index': 99, 
                 right: 1,}}></div>

                 <div className="slimScrollRail" style={{width: 8, 
                 height: '100%', 
                 position: 'absolute', 
                 top: 0, 
                 display: 'none', 
                ' border-radius': 7,
                 background: "rgb(51, 51, 51) none repeat scroll 0% 0%",
                 opacity: 0.2, 
                 'z-index': 90, 
                 right: 1,}}></div>

                </div>
               </div> 
               <a href="photo_chat.html" className="dropdown-item text-center notify-all">
                View all <i className="fa fa-arrow-right"></i>
               </a>
              </div>
             </li>
            
           <li className="dropdown mega-avatar">
            <a href="/" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
             <span className="avatar w-32"><img src="assets/img/users/2.jpg" className="img-resonsive img-circle" width="25" height="25" alt="User" /></span>&nbsp;
             <span className="hidden-xs">
              Alex Grantte
             </span>
            </a>
            <div className="dropdown-menu w dropdown-menu-scale pull-right">
             <a className="dropdown-item" href="/"><span>New Story</span></a> 
             <a className="dropdown-item" href="/"><span>Become a Member</span></a> 
             <div className="dropdown-divider"></div>
             <a className="dropdown-item" href="/"><span>Profile</span></a> 
             <a className="dropdown-item" href="/"><span>Settings</span></a> 
             <a className="dropdown-item" href="/">Need help?</a> 
             <div className="dropdown-divider"></div>
             <a className="dropdown-item" href="/">Sign out</a>
            </div>
           </li>
           
           </ul>   
          </div>
         </div>
        </nav>
       </header>
    )
}
export default Header