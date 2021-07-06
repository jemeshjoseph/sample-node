/**
 * Sample application using Express
 */
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Example 1: Hello World
// app.get('/', (req, res) => res.send('Hello World!'));

// HTML file rendering
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'sampleHtml.html'));
});

app.get('/signup', function (req, res) {
  res.sendFile(path.join(__dirname, 'signup-express.html'));
});

app.post('/signup', function (req, res) {
  // console.log('Request object: ', req);
  res.send('Signup action');
});


app.listen(port, () => {
  console.log('__dirname: ', __dirname);
  console.log('__filename: ', __filename);
  console.log(`Example app listening on port ${port}!`, `Server running at http://127.0.0.1:${port}/`)
});