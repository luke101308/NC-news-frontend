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

// export const postComment = () => {
//     return axios.post(`${url}/`)
// }