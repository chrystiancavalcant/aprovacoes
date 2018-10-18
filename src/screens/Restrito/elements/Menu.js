import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Menu = props => {
  return (
    <div>
      <section className='nav-sec'>
        <div className='d-flex justify-content-between'>
          <div className='p-2 nav-icon-lg dark-black'>
            <Link className='nav-icon' to='/restrito'>
              <em className='fa fa-home' />
              <span>Home</span>
            </Link>
          </div>
          <div className='p-2 nav-icon-lg clean-black'>
            <Link className='nav-icon' to='/restrito/profile'>
              <em className='fa fa-crosshairs' />
              <span>Clientes</span>
            </Link>
          </div>
          <div className='p-2 nav-icon-lg dark-black'>
            <Link className='nav-icon' to='/restrito/campanha'>
              <em className='fab fa-instagram' />
              <span>Campanhas</span>
            </Link>
          </div>
          <div className='p-2 nav-icon-lg clean-black'>
            <Link className='nav-icon' to='/restrito/historico'>
              <em className='fa fa-align-left' />
              <span>Histórico</span>
            </Link>
          </div>
          {/* <div className="p-2 nav-icon-lg mint-green">
         <Link className="nav-icon" to="/restrito/cadastro"><em className="fa fa-user"></em>
          <span>Admin</span>
         </Link>
    </div> */}
        </div>
      </section>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps)(Menu)
