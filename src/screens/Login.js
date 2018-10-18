import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import ActionCreators from '../redux/actionCreators'

class Login extends Component {
  state = {
    form: {
      email: '',
      passwd: ''
    }
  }
  handleChange = fieldname => event => {
    const form = {
      ...this.state.form
    }
    form[fieldname] = event.target.value
    this.setState({ form })
  }
  login = () => {
    const { email, passwd } = this.state.form
    this.props.login(email, passwd)
  }
  render () {
    if (this.props.auth.isAuth) {
      if (this.props.auth.user.role === 'admin') {
        return <div><Redirect to='/admin' /></div>
      }
      return <div><Redirect to='/restrito' /></div>
    }
    return (
      <div>
        <section className='login'>
          <div className='container'>
            <div className='banner-content'>
              <h1><i className='fa fa-smile' />FromRio</h1>
              <form className='form-signin'>
                <h3 className='form-signin-heading'>Entrar</h3>
                <div className='form-group'>
                  <input
                    type='text'
                    value={this.state.form.email}
                    onChange={this.handleChange('email')}
                    className='form-control'
                    placeholder='Email'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    value={this.state.form.passwd}
                    onChange={this.handleChange('passwd')}
                    className='form-control'
                    placeholder='Password'
                  />
                </div>
                <button
                  className='kafe-btn kafe-btn-mint btn-block'
                  onClick={this.login}
                >
                  Sign up
                </button>
                <br />
                <a className='btn btn-dark ' href='#/' role='button'>
                  Já tem uma conta? Click aqui.
                </a>
                <a className='btn btn-dark ' href='#/' role='button'>
                  Esqueceu sua senha?
                </a>
                <br />

              </form>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    login: (email, passwd) =>
      dispatch(ActionCreators.signinRequest(email, passwd))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
