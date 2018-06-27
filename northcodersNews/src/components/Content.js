import React from 'react';
import AllTopics from "./ContentComponents/AllTopics"
import {Route} from "react-router-dom"
import { getAllTopics } from '../apiAccess';

class Content extends React.Component {
    state = {
        topics: []
    }
    componentDidMount(){
        getAllTopics().then(topics=>{
            this.setState({topics})
        })
    }
    render(props) {
        return <div className="Content">
           <Route path="/alltopics" render={() =>{
               return <AllTopics topics={this.state.topics}/>
           }}/>
        </div>
    }
}

export default Content