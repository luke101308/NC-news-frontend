import React from 'react';
import {Route, Switch} from "react-router-dom"
import { getAllTopics, getAllArticles} from '../apiAccess';
import AllTopics from "./ContentComponents/AllTopics"
import AllArticles from './ContentComponents/AllArticles';
import ArticleFromId from "./ContentComponents/ArticleFromId"
import ArticlesByTopic from "./ContentComponents/ArticlesByTopic"
import Login from "./ContentComponents/Login"
import UserByUsername from './ContentComponents/UserByUsername';
import Search from "./ContentComponents/Search"
import Error404 from "./ContentComponents/Error404" 
import Homepage from './ContentComponents/Homepage';
import PostArticle from "./ContentComponents/PostArticle"

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
          <Switch>
           <Route exact path="/topics" render={() =>{
               return <AllTopics topics={this.state.topics}/>
           }}/>
           <Route exact path="/articles" render={() => {
               return <AllArticles articles={this.state.articles}/>
            }}/>
             <Route path="/login" render={() => {
                return <Login login={this.props.login} userError={this.props.userError}/>
            }}/>
            <Route path="/articles/:article_id" render={(props) => {
                return <ArticleFromId {...props} user={this.props.user}/>
            }}/>
            <Route exact path="/topics/:topic_slug" component={ArticlesByTopic}/>
            <Route path="/topics/:topic_slug/post" render={(props) => {
                return<PostArticle {...props} user={this.props.user}/>
            }}/>
               <Route path="/users/:username" component={UserByUsername}/>
               <Route path="/search" render={(props) => {
                return <Search {...props} articles={this.state.articles}/>
            }}/>
             <Route exact path="/" component={Homepage} />
            <Route component={Error404} />
            </Switch>
        </div>
    }
}

export default Content