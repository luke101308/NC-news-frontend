import React, { Component } from 'react';
import {getArticleById} from "../../apiAccess"
import {Link} from "react-router-dom"
import Comments from "./Comments"

class ArticleFromId extends Component {
    state = {
        article: {}
    }

    componentDidMount(){
        getArticleById(this.props.match.params.article_id).then(article => {
            this.setState({article})
        })
    }
    render() {
        const article = this.state.article
        return (
            Object.keys(article).length ?<div>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
                <br/>
                {article.created_by ? <p> created by:{article.created_by.username}</p> : ''}
                {article.belongs_to ? <p>see more from <Link to={`../topics/${article.belongs_to}`}>{article.belongs_to}</Link></p> : ''}
                <Comments article_id={article._id}/>
            </div> : ""
        );
    }
}

export default ArticleFromId;