import mongoose from 'mongoose';
// import unirest from 'unirest';
import axios from 'axios';

const rootUri = process.env.NYTIMES_URI;
const apiKey = process.env.NYTIMES_APIKEY;

async function getContent() {

    const response = await axios.get("https://gnews.io/api/v4/top-headlines?token=354d952182c3316d2f4228138aa88e3f");
    console.log(response.data);
    return response.data;
}

module.exports = { getContent };
