// Function to read a database file and return an object with the number of students in each field
const fs = require('fs').promises; // Import the fs module with promises

async function readDatabase(path) {
    try {
        const data = await fs.readFile(path, 'utf-8');
        const lines = data.split('\n');
        if (lines.length < 2) {
            throw new Error('Cannot load the database');
        }
        const students = lines.slice(1).map((line) => {
            const [firstname, , , field] = line.split(',');
            return {
                firstname, 
                field,
            }
        });
        return students.filter((student) => student.firstname && student.field);

        const fields = students.reduce((acc, student) => {
            if (!acc[student.field]) {
                acc[student.field] = [];
            }
            acc[student.field].push(student.firstname);
            return acc;
        }, {});
        return fields
        } catch (error) {
            throw new Error('Cannot load the database');
    }
};
export default readDatabase;