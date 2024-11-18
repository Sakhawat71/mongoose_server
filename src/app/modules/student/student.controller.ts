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
        })

    } catch (error) {
        console.log(" we get error in controller ", error);
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
        })
    } catch (error) {
        console.log(error);
    }
}


export const studentControllers = {
    createStudent,
    getAllStudents,
};
