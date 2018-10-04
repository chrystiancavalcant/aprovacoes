import React from 'react'


const Menu = (props) => {
    return(
        <section className="nav-sec">
        <div className="d-flex justify-content-between">
         <div className="p-2 nav-icon-lg dark-black">
         <a className="nav-icon" href="/home"><em className="fa fa-home"></em>
          <span>Home</span>
         </a>
         </div>
         <div className="p-2 nav-icon-lg clean-black">
         <a className="nav-icon" href="/profile"><em className="fa fa-crosshairs"></em>
          <span>Cliente</span>
         </a>
         </div>
         <div className="p-2 nav-icon-lg dark-black">
         <a className="nav-icon" href="/campanha"><em className="fab fa-instagram"></em>
          <span>Campanha</span>
         </a>
         </div>
         <div className="p-2 nav-icon-lg clean-black">
         <a className="nav-icon" href="/permissao"><em className="fa fa-align-left"></em>
          <span>Permissao</span>
         </a>
         </div>
         <div className="p-2 nav-icon-lg mint-green">
         <a className="nav-icon" href="/"><em className="fa fa-user"></em>
          <span>Admin</span>
         </a>
         </div>
        </div>
      </section>
    )
}
export default Menu