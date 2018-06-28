import React from 'react';
import {NavLink} from "react-router-dom"

function AllTopics({topics}) {
   
        return (
            <div className="Display">
                {topics.map(topic => {
                   return <div key={topic.title}><NavLink to={`../topics/${topic.title}`} key={topic.title}>{topic.title}</NavLink><br/><br/></div>                
                })}
            </div>
        );
}

export default AllTopics;
