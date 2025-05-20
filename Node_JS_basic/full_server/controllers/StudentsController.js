// This file contains the StudentsController class which handles requests related to students.
// It includes methods to get all students and to get students by major.
// Importing the readDatabase function to read the database file
// and handle errors if the file cannot be loaded.

import readDatabase from '../utils';

class StudentsController {
    static getAllStudents(request, response) {
        try {
            const fields = readDatabase(process.argv[2]);
            let output = `This is the list of our students\n`;
            
            for (const field in fields) {
                if (fields[field].length > 0) {
                    output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
                }
            }
            response.statusCode = 200;
            response.send(output.trim());
        } catch (error) {
            response.statusCode = 500;
            response.send('Cannot load the database');
        }
    }

    static getAllStudentsByMajor(request, response) {
        const { major } = request.params;
        if (major !== 'CS' && major !== 'SWE') {
            response.statusCode = 500;
            response.send('Major parameter must be CS or SWE');
        }
        try {
            const fields = readDatabase(process.argv[2]);
            const students = fields[major] || [];
            response.statusCode = 200;
            response.send(`List: ${students.join(', ')}`);
        }
        catch (error) {
            response.statusCode = 500;
            response.send('Cannot load the database');
        }
    }
}
export default StudentsController;
