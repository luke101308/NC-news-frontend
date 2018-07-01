import React, { Component } from 'react';

class PostArticle extends Component {
    state = {
        title: '',
        body: ''
    }
    render() {
        return (
            <div>
                <br/>
                <input className="Input" value={this.state.title} onChange={this.handleTitleChange} placeholder="Title"></input><br/><br/>
                <textarea rows="10" cols="50" className="Input" value={this.state.body} onChange={this.handleBodyChange} placeholder="Body"></textarea><br/>
                <button onClick={this.props.handleClick}>Submit</button>
            </div>
        );
    }
    handleTitleChange= (e) => {
        this.setState({title: e.target.value})
    }
    handleBodyChange= (e) => {
        this.setState({body: e.target.value})
    }
}

export default PostArticle;