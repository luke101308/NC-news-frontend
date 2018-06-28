import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav"
import Content from "./components/Content"

class App extends Component {
  state = {
    user: {
      _id: "5b1d059793df3b085c02fed1",
      username: "grumpy19",
      name: "Paul Grump",
      avatar_url: "http://www.tumbit.com/profile-image/4/original/mr-grumpy.jpg",
      __v: 0
      }
  }
  render() {
    return (
      <div className="App">
      <h1 className="Title">Northcoders News</h1>
      <Nav />
      <Content user={this.state.user}/>
      </div>
    );
  }
}

export default App;
