import { Request, Response } from 'express';
import { studentServices } from './student.service';

// create singel student
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await studentServices.createStudentIntoDb(studentData);

    res.status(200).json({
      seccess: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      seccess: false,
      message: 'Student can`t created',
      data: error,
    });
  }
};

// get all students

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsFormDb();

    res.status(200).json({
      seccess: true,
      message: 'Students are retrieved succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get single student data by id

const getStudentById = async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const result = await studentServices.singleStudentFromDb(studentId);

  res.status(200).json({
    success: true,
    message: `get student by ${studentId}`,
    data: result,
  });
};

export const studentControllers = {
  createStudent,
  getAllStudents,
  getStudentById,
};
