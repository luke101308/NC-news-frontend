import React from 'react';
import {Link} from "react-router-dom"

function Nav({user, logout}) {
    return (
        <nav className="Nav">   
        <Link to="/articles" className="Button">
        All Articles
        </Link>
        <Link to="/topics" className="Button">
            All Topics
        </Link>
        <Link to="/search" className="Button"> 
        Search
        </Link>
        {Object.keys(user).length ? <Link to="/" className="Button" onClick={logout}>
        Logout 
        </Link> :  
        <Link to="/login" className="Button">
        Login
        </Link> }
        </nav>
    );
}

export default Nav