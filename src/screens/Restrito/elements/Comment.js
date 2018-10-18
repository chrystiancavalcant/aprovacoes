import React, { Component } from 'react'

import Comments from './Comments'
import NewComment from './NewComment'
import { database } from '../../../base'

class Comment extends Component {
	state = {
		comments: {},
		isLoading: false
	}
	sendComment = coment =>{
		const id = database.ref().child('comments').push().key
		const comments = {}
		comments['comments/'+id] = {
			coment
		}
		database.ref().update(comments)
	}
	componentDidMount(){
		this.setState({isLoading: true})
		this.comments = database.ref('comments')
		this.comments.on('value', snapshot => {
			this.setState({comments: snapshot.val(),
			isLoading: false })
		})
	}
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-lg-12">
					{
						this.state.isLoading && <p>Carregando...</p>
					}
						<i class="fas fa-check-circle"></i>&nbsp;
						<i class="far fa-check-circle"></i>&nbsp;
						<i class="fas fa-pen-square"></i>&nbsp;
						<i class="fas fa-ban"></i>
						<Comments comments={this.state.comments}/>
						<NewComment sendComment={this.sendComment}/>
					</div>
				</div>
			</div>
		)
	}
}

export default Comment
