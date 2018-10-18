import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Menu extends Component {
    render(){
    return(
        <div>
        <section className="nav-sec">
        <div className="d-flex justify-content-between">
         <div className="p-2 nav-icon-lg dark-black">
         <Link className="nav-icon" to="/admin"><em className="fa fa-home"></em>
          <span>Home</span>
         </Link>
         </div>
         <div className="p-2 nav-icon-lg clean-black">
         <Link className="nav-icon" to="/admin/profile"><em className="fa fa-crosshairs"></em>
          <span>Cliente</span>
         </Link>
         </div>
         <div className="p-2 nav-icon-lg dark-black">
         <Link className="nav-icon" to="/admin/campanha"><em className="fab fa-instagram"></em>
          <span>Campanha</span>
         </Link>
         </div>
         <div className="p-2 nav-icon-lg clean-black">
         <Link className="nav-icon" to="/admin/historico"><em className="fa fa-align-left"></em>
          <span>Histórico</span>
         </Link>
         </div>
         <div className="p-2 nav-icon-lg mint-green">
         <Link className="nav-icon" to="/admin/cadastro"><em className="fa fa-user"></em>
          <span>Admin</span>
         </Link>
         </div>
        </div>
      </section>
      </div>
   )
 }
}
export default Menu 