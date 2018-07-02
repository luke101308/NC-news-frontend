import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Login extends Component {
    state = {
        username: ''
    }
    render() {
    return (
        <div className="LoginPage">
            <input 
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="enter username"
                className="Input Login"
                >
            </input>
        <Link 
            to={`/users/${this.state.username}`} 
            onClick={() => {this.props.login(this.state.username)}}
            className="Button Login"
            >
            Submit
        </Link>
    </div>
    );
    }

    handleChange = (e) => {
        this.setState({username: e.target.value})
    }
}

export default Login