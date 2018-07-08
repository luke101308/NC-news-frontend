import React, { Component } from 'react';
import {getCommentsByArticleId, postComment, changeCommentVote, deleteCommentById} from "../apiAccess"
import defaultAvatar from "./default_avatar.png"
import PostComment from "./PostComment"


class Comments extends Component {
    state = {
        comments: [],
        comment: ''
    }

    componentDidMount(){
        getCommentsByArticleId(this.props.article._id).then(comments => {
            this.setState({comments})
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props !== prevProps){
            getCommentsByArticleId(this.props.article._id).then(comments => {
                this.setState({comments})
            }) 
        }
    }

    render() {
        const {comments, comment} = this.state
        return (
           <div className="CommentGrid">
              {Object.keys(this.props.user).length ? <PostComment handleChange={this.handleChange} handleClick={this.handleClick} comment={comment} user={this.props.user}/> : null }
              <br/>
              {comments && comments.map(comment => {
                  return <div className="CommentContainer" key={comment._id}>
                            <img className="Avatar" src={comment.created_by.avatar_url} onError={this.handleError} alt="Avatars broken - please submit a bug report"/>
                            <span className="AddsMargin CommentCreator">{comment.created_by.username}</span>
                            <span className="AddsMargin CommentBody">{comment.body}</span>
                            <div className="VotesTally">Votes:{comment.votes}</div>
                            {<button className="VoteButton" onClick={() => {this.changeCommentVotes(comment._id, 'up')}} >upvote</button>}
                            <button className="VoteButton" onClick={() => {this.changeCommentVotes(comment._id, 'down')}}>downvote</button>
                            {comment.created_by._id === this.props.user._id ?<button onClick={() => {this.deleteComment(comment._id, comment.created_by._id)}} className="Delete">delete</button> : "" } 
                        </div>
              })}  
            </div>
        );
    }

    handleError = (e) => {
        e.target.src= defaultAvatar
        e.target.onError= null
    }
    handleChange = (e) => {
        this.setState({comment: e.target.value})
    }
    handleClick = () => {
        postComment(this.props.article._id, this.state.comment, this.props.user).then(newComment => {
        const newComments = [...this.state.comments, {...newComment, created_by:this.props.user}]
            this.setState({comments:newComments, comment: ''})
        })
    }
    changeCommentVotes= (comment_id, direction) => { 
        changeCommentVote(comment_id, direction)
        const newComments = this.state.comments.map(comment => {
            if(comment._id === comment_id){
                if(direction ==="up"){
                    comment.votes = comment.votes + 1
                }else{
                    comment.votes = comment.votes - 1
                }
                return comment
            }else{
                return comment
            }
            })
            this.setState({comments:newComments})
        }
    
    deleteComment = (comment_id, comment_createdBy_Id) => {
        deleteCommentById(comment_id)
        const newComments = this.state.comments.filter(comment => comment_id !== comment._id)
        this.setState({comments:newComments}) 
    }
}

export default Comments;