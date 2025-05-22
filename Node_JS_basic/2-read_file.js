// This module to create a program that reads from a file as csv and writes to standard output

const fs = require('fs');

// This module exports a function that counts the number of students in a CSV file
// and prints the number of students in each field
// The function takes a file path as an argument

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8'); // Read the file synchronously and put the data in a variable
    const lines = data.trim().split('\n'); // Divide the data into lines
    if (lines.length < 2) { // Check if the line is empty or has only one line
      throw new Error('Cannot load the database');
    }
    const students = lines.slice(1).map((line) => { // Map the lines to an array of objects
      const [firstname, lastname, age, field] = line.split(','); // Split the line into an array of strings
      return {
        firstname, lastname, age, field,
      };
    });
    console.log(`Number of students: ${students.length}`);

    const fields = students.reduce((acc, student) => {
      if (!acc[student.field]) {
        acc[student.field] = [];
      }
      acc[student.field].push(student.firstname);
      return acc;
    }, {});
    for (const field in fields) {
      if (fields[field].length > 0) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
