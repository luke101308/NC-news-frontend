import React, { Component } from 'react';
import {getCommentsByArticleId} from "../../apiAccess"
import defaultAvatar from "./default_avatar.png"

class Comments extends Component {
    state = {
        comments: []
    }

    componentDidMount(){
        getCommentsByArticleId(this.props.article_id).then(comments => {
            this.setState({comments})
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props !== prevProps){
            getCommentsByArticleId(this.props.article_id).then(comments => {
                this.setState({comments})
            }) 
        }
    }

    render() {
        const comments = this.state.comments
        return (
            <div>
              {comments.length ? comments.map(comment => {
                  return <div key={comment._id}>
                      <img className="Avatar" src={comment.created_by.avatar_url} onError={this.HandleError} alt="Avatars broken - please submit a bug report"/>
                      <span className="NeedsMargin">{comment.created_by.username}</span>
                      <span className="NeedsMargin">{comment.body}</span>
                  </div>
              }) : ""}
            </div>
        );
    }

    HandleError = (e) => {
e.target.src= defaultAvatar
e.target.onError= null
    }
}

export default Comments;