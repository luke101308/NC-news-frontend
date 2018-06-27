const axios = require('axios')

const url = "https://northcoders-news-production.herokuapp.com/api"

export const getAllTopics = () => {
   return axios.get(`${url}/topics`).then(res => {
        return res.data.topics})
}