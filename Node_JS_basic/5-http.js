// This module to create a small HTTP server using the http module

const http = require('http'); // Import the http module
const countStudents = require('./3-read_file_async'); // Import the countStudents function from the 3-read_file_async module

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((data) => {
        res.end(data); // data is assumed to be a pre-formatted string
      })
      .catch((error) => {
        res.end(error.message); // error.message is appended after the initial write
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});
app.listen(1245); // app.listen is now a function call

module.exports = app;;
