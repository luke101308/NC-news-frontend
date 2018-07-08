import React, { Component } from 'react';
import {findUser} from "../apiAccess"
import defaultAvatar from "../img_files/default_avatar.png"
import {Redirect} from "react-router-dom"


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
        console.log(user)
        return (
            Object.keys(user).length ? <div>
              <h1>{user.username}</h1>  
              <img className="Avatar" src={user.avatar_url} onError={this.handleError} alt="Avatars broken - please submit a bug report"/>
              <p>Name:{user.name}</p>            
            </div> : <Redirect to='../404'/>
        );
    }
    handleError = (e) => {
        e.target.src= defaultAvatar
        e.target.onError= null
    }
}

export default UserByUsername;