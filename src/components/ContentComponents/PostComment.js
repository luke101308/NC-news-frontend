import React, { Component } from 'react';

class PostComment extends Component {
    render() {
        console.log(this.props.comment)
        return (
           <div>
               <input value={this.props.comment} onChange={this.props.handleChange} placeholder="Post a comment..."></input>
               <button onClick={this.props.handleClick}>Submit</button>
           </div>
        );
    }
}

export default PostComment;