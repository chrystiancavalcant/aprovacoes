import React, { Component } from 'react'


class Login extends Component {
    render()  {
    return  (
        <div>
        <section className="login">
      <div className="container">
        <div className="banner-content">
    		<h1><i className="fa fa-smile"></i>FromRio</h1>
        <form method="post" className="form-signin">
         <h3 className="form-signin-heading">Crie uma Conta</h3>
          <div className="form-group">
           <input name="email" type="text" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <input name="Username" type="text" className="form-control" placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" />
          </div>
          <button className="kafe-btn kafe-btn-mint btn-block" type="submit" name="subm">Sign up</button>
        <br/>
        <a className="btn btn-dark " href="/profile" role="button">Já tem uma conta? Click aqui.</a>
        <a className="btn btn-dark " href="/" role="button">Esqueceu sua senha?</a>
        </form>
		
       </div>
      </div>
     </section> 
     </div>
    )
        }

    }
export default Login