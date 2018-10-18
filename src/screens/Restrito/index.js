import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'
import Profile from './Profile'
import Campanha from './Campanha'
import Historico from './Historico'
import Cadastro from './Cadastro'

const Restrito = props => {
    if (!props.auth.isAuth) {
        return <Redirect to='/' />
    }
    return (
        <div>
            <div>
                <Route exact path={`${props.match.path}/`} component={Home} />
                <Route path={`${props.match.path}/profile`} component={Profile} />
                <Route path={`${props.match.path}/campanha`} component={Campanha} />
                <Route path={`${props.match.path}/historico`} component={Historico} />
                <Route path={`${props.match.path}/cadastro`} component={Cadastro} />
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Restrito)