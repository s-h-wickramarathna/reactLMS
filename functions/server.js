const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();



router.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});


app.use('/.netlify/functions/server', router);  // path must route to lambda
module.exports.handler = serverless(app);