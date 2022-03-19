import mongoose from 'mongoose';
// import unirest from 'unirest';
import axios from 'axios';

const rootUri = process.env.NYTIMES_URI;
const apiKey = process.env.NYTIMES_APIKEY;

async function getContent() {

    const response = await axios.get(`${rootUri}content/all/all.json?api-key=${apiKey}`);
    return response.data.results;
}

module.exports = { getContent };
