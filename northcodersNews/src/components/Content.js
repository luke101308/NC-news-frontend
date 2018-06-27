import React from 'react';
import {Route} from "react-router-dom"
import { getAllTopics, getAllArticles } from '../apiAccess';
import AllTopics from "./ContentComponents/AllTopics"
import AllArticles from './ContentComponents/AllArticles';
import ArticleFromId from "./ContentComponents/ArticleFromId"

class Content extends React.Component {
    state = {
        topics: [],
        articles: []
    }
    componentDidMount(){
        getAllTopics().then(topics=>{
            this.setState({topics})
        })
        getAllArticles().then(articles=>{
            this.setState({articles})
        })
    }
    render(props) {
        return <div className="Content">
           <Route path="/topics" render={() =>{
               return <AllTopics topics={this.state.topics}/>
           }}/>
           <Route exact path="/articles" render={() => {
               return <AllArticles articles={this.state.articles}/>
            }}/>
            <Route exact path={"/articles/:article_id"} render={(props) => {
                return <ArticleFromId {...props}/>
            }}/>
        </div>
    }
}

export default Content