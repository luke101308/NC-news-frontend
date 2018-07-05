import React, { Component } from 'react';
import {findUser} from "../apiAccess"
import defaultAvatar from "./default_avatar.png"


class UserByUsername extends Component {
state= {
    user:{}
}

componentDidMount(){
    findUser(this.props.match.params.username).then(user => {
        this.setState({user})
    })
}


    render() {
        const {user} = this.state
        return (
            Object.keys(this.state.user).length? <div className ="User">
              <h1>{user.username}</h1>  
              <img className="Avatar" src={user.avatar_url} onError={this.handleError} alt="Avatars broken - please submit a bug report"/>
              <p>Name:{user.name}</p>            
            </div> : ""
        );
    }
    handleError = (e) => {
        e.target.src= defaultAvatar
        e.target.onError= null
            }
}

export default UserByUsername;