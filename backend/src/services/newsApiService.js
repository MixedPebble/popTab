import mongoose from 'mongoose';
// import unirest from 'unirest';
import axios from 'axios';

const rootUri = process.env.NYTIMES_URI;
const apiKey = process.env.NYTIMES_APIKEY;

async function getContent() {
    const response = await axios.get('https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2022-03-19&' +
    'sortBy=popularity&' +
    'apiKey=ecd099d6bd084018bb0ffacba5475c90');
    console.log("test")
    console.log(response.data);
    return response.data;
}

module.exports = { getContent };
