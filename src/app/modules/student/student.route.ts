import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router();

router.post('/create-student', studentControllers.createStudent);
router.get('/get-students',studentControllers.getAllStudents)



export const studentRouter = router;