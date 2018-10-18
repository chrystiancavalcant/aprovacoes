import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

//import ActionCreators from '../../../redux/actionCreators'

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
           <Link className="navbar-brand" to="/restrito"><i className="fab fa-instagram"></i>FromRio</Link>
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
              <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="/" role="button" aria-haspopup="false" aria-expanded="false">
               <i className="fa fa-bell noti-icon"></i>
               <span className="badge badge-danger badge-pill noti-icon-badge">0</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-right dropdown-lg">
               <div className="dropdown-item noti-title">
                <h6 className="m-0">
                 <span className="pull-right">
                  <Link to="/" className="text-dark"><small>Apagar tudo</small></Link> 
                 </span>Notificação
                </h6>
               </div>
               <div className="slimScrollDiv" style={{position: 'relative', 
               overflow: 'hidden', 
               width:' auto', 
               height: 416.983,}}>

                <div className="slimscroll" style={{'maxHeight': 230, 
                overflow: 'hidden', 
                width: 'auto', 
                height: 416.983,}}>
                
                 <div id="Slim">
                  <a href="#/" className="dropdown-item notify-item">
                   <div className="notify-icon bg-success"><i className="fa fa-comment"></i></div>
                   <p className="notify-details">Caleb Flakelar commented on Admin<small className="text-muted">1 min ago</small></p>
                  </a>
                  <a href="#/" className="dropdown-item notify-item">
                   <div className="notify-icon bg-success"><i className="fa fa-user-plus"></i></div>
                   <p className="notify-details">Grace Flake followed you.<small className="text-muted">5 hours ago</small></p>
                  </a>
                  <a href="#/" className="dropdown-item notify-item">
                   <div className="notify-icon bg-success"><i className="fa fa-heart"></i></div>
                   <p className="notify-details">Carlos Crouch liked your photo.<small className="text-muted">3 days ago</small></p>
                  </a>
                  <a href="#/" className="dropdown-item notify-item">
                   <div className="notify-icon bg-success"><i className="fa fa-comment"></i></div>
                   <p className="notify-details">Caleb Flakelar commented on Admin<small className="text-muted">4 days ago</small></p>
                  </a>
                  <a href="#/" className="dropdown-item notify-item">
                   <div className="notify-icon bg-success"><i className="fa fa-user-plus"></i></div>
                   <p className="notify-details">Maureen Hilda followed you.<small className="text-muted">7 days ago</small></p>
                  </a>
                  <a href="#/" className="dropdown-item notify-item">
                   <div className="notify-icon bg-success"><i className="fa fa-heart"></i></div>
                   <p className="notify-details">Carlos Crouch liked your photo.<small className="text-muted">13 days ago</small></p>
                  </a>
                 </div>

                 <div className="slimScrollBar" style={{background: `rgb(158 165 171) none repeat scroll 0% 0%`, 
                 'width': 8, 
                 'position':' absolute', 
                 'top': 0, 
                 'opacity': 0.4, 
                 'display': 'block', 
                 'borderRadius': 7, 
                 'zIndex': 99, 
                 right: 1,}}></div>

                 <div className="slimScrollRail" style={{width: 8, 
                 height: '100%', 
                 position:' absolute', 
                 top: 0, 
                 display:' none', 
                ' borderRadius': 7, 
                 background: 'rgb(51, 51, 51) none repeat scroll 0% 0%',
                 opacity: 0.2, 
                 'zIndex': 90, 
                 right: 1,}}></div>

                </div>
               </div>
               <a href="photo_notifications.html" className="dropdown-item text-center notify-all">
                Ver tudo <i className="fa fa-arrow-right"></i>
               </a>
              </div>
             </li>
  
             <li className="dropdown notification-list">
              <a className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="/" role="button" aria-haspopup="false" aria-expanded="false">
               <i className="fa fa-envelope noti-icon"></i>
               <span className="badge badge-success badge-pill noti-icon-badge">0</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-lg dropdown-new">
               <div className="dropdown-item noti-title">
                <h6 className="m-0">
                 <span className="float-right">
                  <Link to="/" className="text-dark"><small>Apagar Tudo</small></Link> 
                 </span>Chat
                </h6>
               </div>
  
               <div className="slimScrollDiv" style={{position: 'relative', 
               overflow: 'hidden', 
               width: 'auto', 
               height: 416.983,}}>

                <div className="slimscroll" style={{'maxHeight': 230,
                overflow:' hidden', 
                width:' auto', 
                height: 416.983,}}>

                 <div id="Slim2">
                  <a href="#/" className="dropdown-item notify-item nav-user">
                   <div className="notify-icon"><img src="../assets/img/users/1.jpg" className="img-responsive img-circle" alt="" /> </div>
                   <p className="notify-details">Cristina Pride</p>
                   <p className="text-muted font-13 mb-0 user-msg">Hi, How are you? What about our next meeting</p>
                  </a>
                  <a href="#/" className="dropdown-item notify-item nav-user">
                   <div className="notify-icon"><img src="../assets/img/users/2.jpg" className="img-responsive img-circle" alt="" /> </div>
                   <p className="notify-details">Sam Garret</p>
                   <p className="text-muted font-13 mb-0 user-msg">Yeah everything is fine</p>
                  </a>
                  <a href="#/" className="dropdown-item notify-item nav-user">
                   <div className="notify-icon"><img src="../assets/img/users/3.jpg" className="img-responsive img-circle" alt="" /> </div>
                   <p className="notify-details">Karen Robinson</p>
                   <p className="text-muted font-13 mb-0 user-msg">Wow that's great</p>
                  </a>
                  <a href="#/" className="dropdown-item notify-item nav-user">
                   <div className="notify-icon"><img src="../assets/img/users/4.jpg" className="img-responsive img-circle" alt="" /> </div>
                   <p className="notify-details">Sherry Marshall</p>
                   <p className="text-muted font-13 mb-0 user-msg">Hi, How are you? What about our next meeting</p>
                  </a>
                  <a href="#/" className="dropdown-item notify-item nav-user">
                   <div className="notify-icon"><img src="../assets/img/users/5.jpg" className="img-responsive img-circle" alt="" /> </div>
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
                 'borderRadius': 7, 
                 'zIndex': 99, 
                 right: 1,}}></div>

                 <div className="slimScrollRail" style={{width: 8, 
                 height: '100%', 
                 position: 'absolute', 
                 top: 0, 
                 display: 'none', 
                ' borderRadius': 7,
                 background: "rgb(51, 51, 51) none repeat scroll 0% 0%",
                 opacity: 0.2, 
                 'zIndex': 90, 
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
             <span className="avatar w-32"><img src={'https://firebasestorage.googleapis.com/v0/b/publish-4d89b.appspot.com/o/avatar.png?alt=media&token=d65be4a8-07c4-4f28-aa63-fd45bee82c3e'} className="img-resonsive img-circle" width="25" height="25" alt="User" /></span>&nbsp;
             <span className="hidden-xs">
             {props.auth.user.name}
             </span>
            </a>
            <div className="dropdown-menu w dropdown-menu-scale pull-right">
             <Link className="dropdown-item" to="/"><span>Meu Perfil</span></Link> 
             <Link className="dropdown-item" to="/"><span>Alterar Senha</span></Link> 
             <div className="dropdown-divider"></div>
             <Link className="dropdown-item" to='/'/*onClick={props.logout}*/><span>Sair</span></Link>
            </div>
           </li>
           
           </ul>   
          </div>
         </div>
        </nav>
       </header>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
/*const mapDispatchToProps = dispatch => {
    return {
      login: (email, passwd) => dispatch(ActionCreators.signinRequest(email, passwd)),
      logout: () => dispatch(ActionCreators.destroyAuthRequest())
    }
  }*/
export default connect(mapStateToProps/*, mapDispatchToProps*/)(Header)
