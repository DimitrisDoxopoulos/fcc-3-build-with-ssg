const axios = require("axios");

exports.handler = async function(event, context, callback) {
    const {lat, lon} = event.queryStringParameters;
    const response = await axios.get(url);
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(response.data)
    })
}