import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav"
import Content from "./components/Content"

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="Title">Northcoders News</h1>
      <Nav />
      <Content />
      </div>
    );
  }
}

export default App;
