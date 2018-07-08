import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav"
import Content from "./components/Content"
import {findUser} from "./apiAccess" 

class App extends Component {
  state = {
    user: {},
    userError: false  
  }
  render() {
    return (
      <div className="App">
      <h1 className="Title">Northcoders News</h1>
      <Nav user={this.state.user} logout={this.logout}/>
      <div  className="User">{this.state.user.username ? this.state.user.username + " is logged in" : "Please log in"}</div>
      <Content user={this.state.user} login={this.logIn} userError={this.state.userError}/>
      </div>
    );
  }
  logIn = (userName) => {
    findUser(userName).then(user => {
      this.setState({user})
    })
    }
    logout = () => {
      this.setState({user: {}})
    }
}

export default App;
