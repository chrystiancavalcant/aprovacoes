import React, { Component } from 'react'

import Menu from './elements/Menu'
import Header from './elements/Header'
import ExploreBoxAp from './elements/ExploreBoxAp'
import Comment from './elements/Comment'

class Campanha extends Component {
    render(){
        return(
            <div>
        <Header />
        <Menu />
        <section className="newsfeed">
            <div className="container">
            <h1>Criar Campanhas</h1>
            <hr/>
                <Comment />
            <hr/>
            <div className="row one-row">
                <div className="col-lg-12">
                <a href=""><h4>Campanhas</h4></a>
                </div>
            </div>
            <div className="row top-row">
                <ExploreBoxAp />
                <ExploreBoxAp />
                <ExploreBoxAp />
            </div>
        <div className="row top-row">
            <ExploreBoxAp />
            <ExploreBoxAp />
            <ExploreBoxAp />
        </div>
        </div>
       </section>
        </div>
        
        )
    }
}
export default Campanha
