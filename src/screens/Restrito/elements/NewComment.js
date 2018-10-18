import React, { Component } from 'react'

class NewComment extends Component {
    state = {
        newComment: ''
    }
    handleChange = event => {
		this.setState({
			newComment: event.target.value
		})
    }
    sendComment = () => {
        this.props.sendComment(this.state.newComment)
        this.setState({
            newComment: ''
        })
    }
    render() {
        return (
            <div>
                <div className="box">
                    <form>
                        <textarea className="form-control no-border" rows="3" value={this.state.newComment} onChange={this.handleChange} placeholder="Digite seu texto aqui..."></textarea>
                    </form>

                    <div className="box-footer clearfix">
                        <button className="kafe-btn kafe-btn-mint-small pull-right btn-sm" onClick={this.sendComment}>Criar Post</button>
                        <ul className="nav nav-pills nav-sm">
                            <li className="nav-item"><a className="nav-link" href="/#"><i className="fa fa-camera text-muted"></i></a></li>
                            <li className="nav-item"><a className="nav-link" href="/#"><i className="fa fa-video text-muted"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewComment