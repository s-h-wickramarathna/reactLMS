const express = require('express');
const serverless = require('serverless-http');
const app = express();

// Your Express routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Additional routes can go here

module.exports.handler = serverless(app);
