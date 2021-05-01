const { default: axios } = require("axios");
require('dotenv').config();

async function getNews(country) {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=' + country + '&category=business&apiKey=' + process.env.NEWS_API_KEY + '&pageSize=5');
        return response.data;
    } catch (error) {
        console.log(error);
    }

module.exports = 
};