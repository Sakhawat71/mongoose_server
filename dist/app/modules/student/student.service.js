"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentServices = void 0;
const student_model_1 = require("./student.model");
// create single student and stored db
const createStudentIntoDb = async (student) => {
    const resutl = await student_model_1.StudentModel.create(student);
    return resutl;
};
// get all students 
const getAllStudentsFormDb = async () => {
    const result = await student_model_1.StudentModel.find();
    return result;
};
// get single students
const singleStudentFromDb = async (id) => {
    const result = await student_model_1.StudentModel.findOne({ id });
    return result;
};
exports.studentServices = {
    createStudentIntoDb,
    getAllStudentsFormDb,
    singleStudentFromDb,
};
