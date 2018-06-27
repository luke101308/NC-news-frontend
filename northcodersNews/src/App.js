import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav"

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="Title">Northcoders News</h1>
      <Nav />
      <div className="Content">Content</div> 
      </div>
    );
  }
}

export default App;
