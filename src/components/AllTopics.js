import React from 'react';
import {NavLink} from "react-router-dom"

function AllTopics({topics, user}) {
        return (
            <div className="Display">
                {topics.map(topic => {
                   return (
                        <p  key={topic.title}>
                            <NavLink className="AddsMargin" to={`../topics/${topic.title}`} key={topic.title}>{topic.title}</NavLink>
                            {Object.keys(user).length ? <NavLink className="AddsMargin" to={`./topics/${topic.title}/post`}>   Post an article in {topic.title}</NavLink> : ""}
                            <br/>
                            <br/>
                        </p>  )              
                })}
            </div>
        );
}

export default AllTopics;
