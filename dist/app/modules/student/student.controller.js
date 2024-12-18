"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentControllers = void 0;
const student_service_1 = require("./student.service");
const student_zod_validation_1 = require("./student.zod-validation");
// create singel student
const createStudent = async (req, res) => {
    try {
        const { student: studentData } = req.body;
        // data validation useing zod validator
        const validatData = student_zod_validation_1.studentZodSchema.parse(studentData);
        const result = await student_service_1.studentServices.createStudentIntoDb(validatData);
        res.status(201).json({
            seccess: true,
            message: 'Student is created succesfully',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            seccess: false,
            message: 'Student can`t created',
            data: error,
        });
    }
};
// get all students
const getAllStudents = async (req, res) => {
    try {
        const result = await student_service_1.studentServices.getAllStudentsFormDb();
        res.status(200).json({
            seccess: true,
            message: 'Students are retrieved succesfully',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            seccess: false,
            message: 'Can`t get Students data',
            data: error,
        });
    }
};
// get single student data by id
const getStudentById = async (req, res) => {
    try {
        const { studentId } = req.params;
        const result = await student_service_1.studentServices.singleStudentFromDb(studentId);
        res.status(200).json({
            success: true,
            message: `get student by ${studentId}`,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            seccess: false,
            message: 'Can`t get Individual Students data',
            data: error,
        });
    }
};
// delate (update as delete) student
const deleteStudentById = async (req, res) => {
    try {
        const { studentId } = req.params;
        const result = await student_service_1.studentServices.deleteStudentFromDb(studentId);
        res.status(200).json({
            success: true,
            message: `delete student by id : ${studentId}`,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            seccess: false,
            message: 'Can`t get Individual Students data',
            data: error,
        });
    }
};
exports.studentControllers = {
    createStudent,
    getAllStudents,
    getStudentById,
    deleteStudentById,
};
