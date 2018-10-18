import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'
import Profile from './Profile'
import Campanha from './Campanha'
import Historico from './Historico'
import Cadastro from  './Cadastro'

/*const Home = props => <div><h1>Home admin</h1></div>*/
/*const Users = props => <div><h1>Users admin</h1></div>*/

const Admin = props => {
    if(!props.auth.isAuth){
        return <Redirect to='/' />
    }
    if(props.auth.user.role !== 'admin'){
        return <Redirect to='/restrito' />
    }
    return (
        <div>
            {/*<h1>Admin</h1>
            <p>
                <Link to='/admin'>Home</Link>
                <Link to='/admin/profile'>Profile</Link>
            </p>*/}
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
const mapStateToProps = state =>{
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Admin)