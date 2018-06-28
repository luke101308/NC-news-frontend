const axios = require('axios')

const url = "https://northcoders-news-production.herokuapp.com/api"

export const getAllTopics = () => {
   return axios.get(`${url}/topics`).then(res => {
        return res.data.topics})
}

export const getAllArticles = () => {
    return axios.get(`${url}/articles`).then(res => {
        return res.data.articles})
}

export const getArticleById = (article_id) => {
    return axios.get(`${url}/articles/${article_id}`).then(res => {
        return res.data.article
    })
}

export const getArticlesByTopic = (topic_slug) => {
    return axios.get(`${url}/topics/${topic_slug.toLowerCase()}/articles`).then( res => {
        return res.data.articles
    })
}

export const getCommentsByArticleId = (article_id) => {
    return axios.get(`${url}/articles/${article_id}/comments`).then( res => {
        return res.data.comments
    })
}

export const postComment = (article_id, comment, user) => {
    return axios.post(`${url}/articles/${article_id}/comments`, {
        body: comment,
        created_by: user._id
    }).then( res => {
        return res.data.comment
    })
}

export const changeCommentVote = (comment_id, direction) => {
    return axios.put(`${url}/comments/${comment_id}?vote=${direction}`)
}

export const changeArticleVote = (article_id, direction) => {
    return axios.put(`${url}/articles/${article_id}?vote=${direction}`)
}

export const deleteComment = (comment_id) => {
    return axios.delete(`${url}/comments/${comment_id}`)
}