// This module to create a small HTTP server using Express module

const express = require('express'); // Import the express module

const app = express(); // Create an instance of express
app.get('/', (req, res) => {
  res.send('Hello Holberton School!'); // Send a response to the client
});
app.listen(1245); // Start the server on port 1245

module.exports = app; // Export the app instance
