require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var debug = require('debug')('cineswipes:index');

async function startServer() {
  const app = express();
  console.log('index.js');

  /** bodyParser.urlencoded(options)
   * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
   * and exposes the resulting object (containing the keys and values) on req.body
   */
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );

  // TODO: Move this to middleware.
  // TODO: Update CORS for production
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:19006'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  await require('./src/loaders').default({ expressApp: app });
  app
    .listen(3000, () => {
      console.log(`
      ################################################
      🛡️  Server listening on port: 3000 🛡️
      ################################################
    `);
    })
    .on('error', err => {
      console.log(err);
      process.exit(1);
    });
}

startServer();
