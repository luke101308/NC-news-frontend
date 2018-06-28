import React from 'react';
import {Route} from "react-router-dom"
import { getAllTopics, getAllArticles } from '../apiAccess';
import AllTopics from "./ContentComponents/AllTopics"
import AllArticles from './ContentComponents/AllArticles';
import ArticleFromId from "./ContentComponents/ArticleFromId"
import ArticlesByTopic from "./ContentComponents/ArticlesByTopic"
import Login from "./ContentComponents/Login"

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

    componentDidUpdate(prevProps, prevState){
        if (this.props !== prevProps){
            getAllTopics().then(topics=>{
                this.setState({topics})
            })
            getAllArticles().then(articles=>{
                this.setState({articles})
            })
        }
    }

    render(props) {
        return <div className="Content">
           <Route exact path="/topics" render={() =>{
               return <AllTopics topics={this.state.topics}/>
           }}/>
           <Route exact path="/articles" render={() => {
               return <AllArticles articles={this.state.articles}/>
            }}/>
             <Route path="/login" render={() => {
                return <Login login={this.props.login}/>
            }}/>
            <Route path="/articles/:article_id" render={(props) => {
                return <ArticleFromId {...props} user={this.props.user}/>
            }}/>
            <Route path="/topics/:topic_slug" render={(props) => {
                return <ArticlesByTopic {...props}/>
            }}/>
            
        </div>
    }
}

export default Content