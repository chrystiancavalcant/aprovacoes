import React, { Component } from 'react'
import Coment from './Coment'

class Comments extends Component {
    render(){
        const keys = Object.keys(this.props.comments)
        return(
            <div>
                { keys.map( key => <Coment key={key} c={this.props.comments[key]} />)}
            </div>
        )
    }
}

export default Comments
