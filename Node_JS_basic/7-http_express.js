// This module to create a small HTTP server using Express module

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  const data = process.argv[2];
  countStudents(data)
    .then((data) => {
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/plain');
      res.send(`This is the list of our students\n'${data}`);
    })
    .catch((error) => {
      res.statusCode = 500;
      res.setHeader('Content-type', 'text/plain');
      res.send(`This is the list of our students\n${error.message}`);
    });
});
app.use((req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-type', 'text/plain');
  res.send('Not found');
});
app.listen(1245);

module.exports = app;
