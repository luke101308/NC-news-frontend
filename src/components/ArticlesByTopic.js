import React, { Component } from 'react';
import {getArticlesByTopic} from "../apiAccess"
import {NavLink, Redirect} from "react-router-dom"

class ArticlesByTopic extends Component {
    state={
        articles: [],
        topicError: false
    }

    componentDidMount(){
        getArticlesByTopic(this.props.match.params.topic_slug)
        .then(articles => {
            this.setState({articles})
        }).catch(() => this.setState({topicError: true}))
    }
    render() {
        const articles = this.state.articles
        return (
            !this.state.topicError ?
            <div>
            {articles.length ? articles.map(article => {
                   return <p key={article._id}><NavLink to={`/articles/${article._id}`} >{article.title}</NavLink></p>
                }) : ''}
            </div> : <Redirect to="../404"/>
        );
    }
}

export default ArticlesByTopic;