import { IStudent } from './student.interface';
import { StudentModel } from './student.model';


// create single student and stored db
const createStudentIntoDb = async (student: IStudent) => {
    const resutl = await StudentModel.create(student);
    return resutl;
};

// get all students 
const getAllStudentsFormDb = async () => {
    const result = await StudentModel.find();
    return result;
}


export const studentServices = {
    createStudentIntoDb,
    getAllStudentsFormDb,
};
