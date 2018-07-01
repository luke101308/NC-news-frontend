import React, { Component } from 'react';
import {postArticle} from "../../apiAccess"
import {Redirect} from "react-router-dom"

class PostArticle extends Component {
    state = {
        title: '',
        body: '',
        newArticleId: ''
    }
    render() {
        console.log('hi')
        return !this.state.newArticleId ? (
            <div>
                <br/>
                <input className="Input" value={this.state.title} onChange={this.handleTitleChange} placeholder="Title"></input><br/><br/>
                <textarea rows="10" cols="50" className="Input" value={this.state.body} onChange={this.handleBodyChange} placeholder="Body"></textarea><br/>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        ) : <Redirect to={`../../../articles/${this.state.newArticleId}`}/>
    }
    handleTitleChange= (e) => {
        this.setState({title: e.target.value})
    }
    handleBodyChange= (e) => {
        this.setState({body: e.target.value})
    }
    handleClick = () => {
        postArticle(this.state.title, this.state.body, this.props.user, this.props.match.params.topic_slug.toLowerCase()).then(article => {
            this.setState({newArticleId: article._id})
        })
    }
}

export default PostArticle;