// This module that create a small HTTP server using the http module

const http = require('http'); // Import the http module

const app = http.createServer((req, res) => {
  res.statusCode = 200; // Set the status code to 200
  res.setHeader('Content-type', 'text/plain'); // Set the content type to text/plain
  res.end('Hello Holberton School!'); // End the response with a message
}); // Create the server
app.listen = 1245;

module.exports = app; // Export the app
