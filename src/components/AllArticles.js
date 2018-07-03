import React from 'react';
import {NavLink} from "react-router-dom"

function AllArticles({articles}) {
        return (
            <div className="Display">
                {articles.map(article => {
                   return <p key={article._id}><NavLink to={`/articles/${article._id}`} >{article.title}</NavLink></p>
                })}
            </div>
        );
}

export default AllArticles;
