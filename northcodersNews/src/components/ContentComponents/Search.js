import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Search extends Component {
    state = {
        input: ''
    }
    render() {
        const input = this.state.input
        console.log(this.findArticleId())
        return (
          <div className="SearchBar">
              <input value ={input} onChange={this.handleChange} className="InputBar Input"/>
              <br/>
              <Link to={`./users/${input}`} className="Button SearchButton">Search Users by Username</Link>
              <Link to={`./articles/${this.findArticleId()}`} className="Button SearchButton">Search Articles by Title</Link>
              <Link to={`./topics/${input}`} className="Button SearchButton">Search Topics by Topic Name</Link>
          </div>
        );
    }
    handleChange = (e) => {
        this.setState({input: e.target.value})
    }
    findArticleId = () => {
        const articleInfo = this.props.articles.find((article) => {
            return article.title.toLowerCase() === this.state.input.toLowerCase()})
            if (articleInfo) return articleInfo._id
    }
}

export default Search;