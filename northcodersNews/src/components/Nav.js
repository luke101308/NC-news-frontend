import React from 'react';
import AllArticlesButton from "./NavComponents/AllArticlesButton"
import AllTopicsButton from "./NavComponents/AllTopicsButton"
import SearchButton from "./NavComponents/SearchButton"
import LoginButton from "./NavComponents/LoginButton"
import LogoutButton from "./NavComponents/LogoutButton"
import {Link} from "react-router-dom"

function Nav({user, logout}) {
    return (
        <nav className="Nav">   
        <Link to="/articles" className="Button">
            <AllArticlesButton />
        </Link>
        <Link to="/topics" className="Button">
            <AllTopicsButton />
        </Link>
        <Link to="/search" className="Button"> 
        <SearchButton />
        </Link>
        {Object.keys(user).length ? <Link to="/" className="Button">
        <LogoutButton logout={logout}/> 
        </Link> :  
        <Link to="/login" className="Button">
        <LoginButton /> 
        </Link> }
        </nav>
    );
}

export default Nav