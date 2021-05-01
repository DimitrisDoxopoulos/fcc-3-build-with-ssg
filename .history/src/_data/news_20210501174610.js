const { default: axios } = require("axios");
require('dotenv').config();

module.exports = async function getUser() {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=' + process.env.NEWS_API_KEY + '&pageSize=5');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};