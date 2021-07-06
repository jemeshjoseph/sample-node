/**
 * Sample application without using Express
 */

var http = require('http');
var fs = require('fs');
var url = require('url');

// Example 1: Hello World
// http.createServer(function (request, response) {
//   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   response.end('Hello World');
// }).listen(8081, function () {
//   console.log('Server running at http://127.0.0.1:8081/');
// });

// Examole 2: HTML File rendering and form submition
http.createServer(function (req, res) {
  console.log('Full url: ', req.url);
  let parsedUrl = url.parse(req.url, true);
  // console.log(parsedUrl);
  console.log('URL Pathname: ', parsedUrl.pathname);
  switch (parsedUrl.pathname) {
    case '/':
      fs.readFile('sampleHtml.html', function (err, data) {
        if (data) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(data);
          res.end();
        } else {
          errorResponse(res);
        }
      });
      break;

    case '/signup':
      fs.readFile('signup.html', function (err, data) {
        if (data) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(data);
          res.end();
        } else {
          errorResponse(res);
        }
      });
      break;

    case '/signupAction':
      console.log(parsedUrl.query);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Hi ${parsedUrl.query.fName} ${parsedUrl.query.lName}`);
      break;

    default:
      errorResponse(res);
      break;
  }
}).listen(8081, function () {
  console.log('Server running at http://127.0.0.1:8081/');
});

function errorResponse(res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Page not found!');
}
