import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Login extends Component {
    state = {
        username: ''
    }
    render() {
        console.log(this.props)
    return (
        <div>
        <input value={this.state.username} onChange={this.handleChange} placeholder="enter username"></input>
        <Link to="../"><button onClick={() => {this.props.login(this.state.username)}}>Submit</button></Link>
    </div>
    );
    }

    handleChange = (e) => {
        this.setState({username: e.target.value})
    }
}

export default Login