import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
    try {

        const {student : studentData} = req.body;
        const result = await studentServices.createStudentIntoDb(studentData);

        res.status(200).json({
            seccess: true,
            message: 'Student is created succesfully',
            data: result,
        })

    } catch (error) {
        console.log(" we get error in controller " ,error);
    }
};

export const studentControllers = {
    createStudent,
};
