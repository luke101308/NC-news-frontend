import React from 'react';
import "./Nav.css"
import AllArticlesButton from "./NavComponents/AllArticlesButton"
import AllTopicsButton from "./NavComponents/AllTopicsButton"
import SearchButton from "./NavComponents/SearchButton"
import LoginButton from "./NavComponents/LoginButton"
import {Link} from "react-router-dom"

function Nav(props) {
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
        <Link to="/login" className="Button">
        <LoginButton />
        </Link>
        </nav>
    );
}

export default Nav