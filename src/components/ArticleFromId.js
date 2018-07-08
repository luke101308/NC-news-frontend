import React, { Component } from 'react';
import {getArticleById} from "../apiAccess"
import {Link, Redirect} from "react-router-dom"
import Comments from "./Comments"
import {changeArticleVote} from "../apiAccess"

class ArticleFromId extends Component {
    state = {
        article: {},
        comment: '',
        articleError: false
    }

    componentDidMount(){
        getArticleById(this.props.match.params.article_id)
        .then(article => {
            this.setState({article})
        }).catch(() => this.setState({articleError: true}))
    }
    render() {
        const {article} = this.state
        return (
            !this.state.articleError ?
            Object.keys(article).length &&
                <div>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                    <br/>
                    {article.created_by && <p> created by:{article.created_by.username}</p>}
                    {article.belongs_to && <p>see more from <Link to={`../topics/${article.belongs_to}`}>{article.belongs_to}</Link></p> }
                    <p>Votes: {article.votes}</p>
                    <button onClick={(e) => {this.changeArticleVotes(article._id, 'up',e)}} disabled={false}>upvote</button>
                    <button onClick={(e) => {this.changeArticleVotes(article._id, 'down', e)}} disabled={false}>downvote</button>   
                    <br /><br /><br />
                    <Comments article={article} user={this.props.user} />
                </div> : <Redirect to="../404"></Redirect>
        );
    }
    changeArticleVotes= (article_id, direction, e) => {
        changeArticleVote(article_id, direction)
            const NewArticle = {...this.state.article}
            if(direction ==="up"){
                NewArticle.votes = NewArticle.votes + 1
                e.target.disabled= true
            }else{
                NewArticle.votes = NewArticle.votes - 1
                e.target.disabled= true
            }
            this.setState({article: NewArticle})
    }
}

export default ArticleFromId;