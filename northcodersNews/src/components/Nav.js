import React from 'react';
import "./Nav.css"
import AllArticlesButton from "./NavComponents/AllArticlesButton"
import AllTopicsButton from "./NavComponents/AllTopicsButton"
import SearchButton from "./NavComponents/SearchButton"
import LoginButton from "./NavComponents/LoginButton"

function Nav(props) {
    return (
        <nav className="Nav">   
        <AllArticlesButton/>
        <AllTopicsButton />
        <SearchButton />
        <LoginButton />
        </nav>
    );
}

export default Nav