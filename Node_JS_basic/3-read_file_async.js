// This module to create a program that reads from a file async as csv and writes to standard output

const fs = require('fs').promises;

const countStudents = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length <= 1) {
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
    }).filter(student => student !== null);

    console.log(`Number of students: ${students.length}`);

    const fields = students.reduce((acc, student) => {
      if (!acc[student.field]) {
        acc[student.field] = [];
      }
      acc[student.field].push(student.firstname);
      return acc;
    }, {});

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }

    let output = `Number of students: ${students.length}\n`;
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }
    }
    
    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
