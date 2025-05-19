// This module to create a program that reads from a CSV file and write to standard output

const fs = require('fs').promises; // Import the fs module with promises

// This module exports a function that counts the number of students in a CSV file
// and prints the number of students in each field
// The function takes a file path as an argument

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8'); // Read the file asynchronously and put the data in a variable
    const lines = data.split('\n'); // Divide the data into lines
    if (lines.length < 2) { // Check if the line is empty or has only one line
      throw new Error('Cannot load the database');
    }
    const students = lines.slice(1).map((line) => {
      if (line.trim() === '') {
        return null;
      }
      const [firstname, lastname, age, field] = line.split(',');
      return {
        firstname, lastname, age, field,
      };
    }).filter((student) => student !== null); // Filter out null values
    console.log(`Number os students: ${students.length}`);
    const fields = students.reduce((acc, student) => {
      if (!acc[student.field]) {
        acc[student.field] = [];
      }
      acc[student.field].push(student.firstname);
      return acc;
    }, {});
    for (const field in fields) {
      if (fields[field].length > 0) {
        console.log(`Number of students: ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
