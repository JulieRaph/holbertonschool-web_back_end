// File created the routes directory
import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = express.Router();
// Route for the homepage

router.get('/', AppController.getHomepage);
// Route base to AppController

router.get('/students', StudentsController.getAllStudents);
// Route for getting all students

router.get('/students/:major', StudentsController.getAllStudentsByMajor);
// Route for getting students by major

export default router;
