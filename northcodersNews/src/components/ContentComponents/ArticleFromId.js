import React, { Component } from 'react';
import {getArticleById} from "../../apiAccess"
import {Link} from "react-router-dom"

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
            <div>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
                <br/>
                {article.created_by ? <p> created by:{article.created_by.username}</p> : ''}
                {article.belongs_to ? <p>see more from <Link to={`./topics/${article.belongs_to}`}>{article.belongs_to}</Link></p> : ''}
            </div>
        );
    }
}

export default ArticleFromId;