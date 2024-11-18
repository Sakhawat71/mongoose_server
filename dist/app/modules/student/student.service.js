"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentServices = void 0;
const student_model_1 = require("./student.model");
const createStudentIntoDb = async (student) => {
    const resutl = await student_model_1.StudentModel.create(student);
    return resutl;
};
exports.studentServices = {
    createStudentIntoDb,
};
