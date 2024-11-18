import { IStudent } from "./student.interface";
import { StudentModel } from "./student.model";


const createStudentIntoDb = async (student: IStudent) => {
    const resutl = await StudentModel.create(student);
    return resutl;
}


export const studentServices = {
    createStudentIntoDb,
}