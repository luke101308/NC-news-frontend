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
          <div>
              <input value ={input} onChange={this.handleChange}/>
              <br/>
              <Link to={`./users/${input}`}><button>Search Users by Username</button></Link>
              <Link to={`./articles/${this.findArticleId()}`}><button>Search Articles by Title</button></Link>
              <Link to={`./topics/${input}`}><button>Search Topics by Topic Name</button></Link>
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