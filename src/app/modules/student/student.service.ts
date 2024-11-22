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
};

// get single students
const singleStudentFromDb = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

// update as deleted
const deleteStudentFromDb = async (id: string) => {
  // const result = await StudentModel.aggregate([
  //   {$match : {id : id}}
  // ])
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
}

export const studentServices = {
  createStudentIntoDb,
  getAllStudentsFormDb,
  singleStudentFromDb,
  deleteStudentFromDb,
};
