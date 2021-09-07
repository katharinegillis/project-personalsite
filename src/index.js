const process = require('process');
const path = require('path');

const express = require('express');
const {debug} = require("nodemon");
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "../public")));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

process.on('SIGTERM', () => {
  debug('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    debug('HTTP server closed');
  });
});