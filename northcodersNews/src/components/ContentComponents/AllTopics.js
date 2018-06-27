import React from 'react';

function AllTopics({topics}) {
   
        return (
            <div>
                {topics.map(topic => {
                   return <p>{topic.title}</p>                
                })}
            </div>
        );
}

export default AllTopics;
