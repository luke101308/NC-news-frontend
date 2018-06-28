import React, { Component } from 'react';
import {getArticlesByTopic} from "../../apiAccess"
import {NavLink} from "react-router-dom"

class ArticlesByTopic extends Component {
    state={
        articles: []
    }

    componentDidMount(){
        getArticlesByTopic(this.props.match.params.topic_slug).then(articles => {
            this.setState({articles})
        })
    }
    render() {
        const articles = this.state.articles
        return (
            <div>
            {articles.length ? articles.map(article => {
                   return <p key={article._id}><NavLink to={`/articles/${article._id}`} >{article.title}</NavLink></p>
                }) : ''}
            </div>
        );
    }
}

export default ArticlesByTopic;