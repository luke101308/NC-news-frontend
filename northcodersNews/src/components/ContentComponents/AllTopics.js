import React from 'react';
import {NavLink} from "react-router-dom"

function AllTopics({topics}) {
   
        return (
            <div className="Display">
                {topics.map(topic => {
                   return <p key={topic.title}><NavLink to={`../topics/${topic.title}`} key={topic.title}>{topic.title}</NavLink><br/><br/></p>                
                })}
            </div>
        );
}

export default AllTopics;
