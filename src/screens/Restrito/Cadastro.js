import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { storage, database } from './../../base'
import Menu from './elements/Menu'
import Header from './elements/Header'

class Cadastro extends Component {
    constructor (props) {
    super(props)
    this.state = {
      sucess: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {

    const file = this.foto.files[0]
    const { name } = file
    const ref = storage.ref(name)

    ref
    .put(file)
    .then(img => {
        const clientes = {
        foto: img.metadata.downloadURLs[0],
        nome: this.nome.value,
        empresa: this.empresa.value,
        email: this.email.value,
        senha: this.senha.value
      }

      database.push(
        'clientes',
        {
          data: clientes
        },
        err => {
          if (err) {
          } else {
            this.setState({ sucess: true })
          }
        })
    })

    e.preventDefault()
  }

  render () {
    if (this.state.sucess) {
      return <Redirect to='/' />
  }
    return (
      <div>
        <Header />
        <Menu />
        <section className='container'>
          <div className='container'>
            <div className='content'>
              <h1>Cadastro de Cliente</h1>
              <form onSubmit={this.handleSubmit} className='form-signin'>

                <h3 className=''>Nome</h3>
                <div className='form-group'>
                  <input
                    name='nome'
                    type='text' id='nome'
                    className='form-control'
                    placeholder='Username'
                    ref={(ref) => this.nome = ref}
                  />
                </div>

                <div className='form-group'>
                  <h3 className=''>Foto</h3>
                  <input
                    type='file'
                    className='form-control'
                    id='foto'
                    name='foto'
                    placeholder='Foto'
                    ref={(ref) => this.foto = ref}
                  />
                </div>

                <div className='form-group'>
                  <h3 className=''>E-mail</h3>
                  <input
                    name='email'
                    type='text'
                    id='email'
                    className='form-control'
                    placeholder='Email'
                    ref={(ref) => this.email = ref}
                  />
                </div>
                <div className='form-group'>
                  <h3 className=''>Password</h3>
                  <input
                    type='password'
                    className='form-control'
                    id='senha'
                    name='senha'
                    placeholder='Password'
                    ref={(ref) => this.senha = ref}
                  />
                </div>
                <div className='form-group'>
                  <h3 className=''>Empresa</h3>
                  <input
                    name='empresa'
                    type='text'
                    className='form-control'
                    id='empresa'
                    placeholder='Empresa'
                    ref={(ref) => this.empresa = ref}
                  />
                </div>
                <button
                  className='kafe-btn kafe-btn-mint btn-block'
                  type='submit'
                  name='subm'
                  onClick={this.handleSubmit}>
                  Criar
                </button>
                <br />
              </form>

            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Cadastro
  