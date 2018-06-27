import React from 'react';

function AllTopics({topics}) {
   
        return (
            <div className="Display">
                {topics.map(topic => {
                   return <p key={topic.title}>{topic.title}</p>                
                })}
            </div>
        );
}

export default AllTopics;
