"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentControllers = void 0;
const student_service_1 = require("./student.service");
const zod_1 = require("zod");
// create singel student
const createStudent = async (req, res) => {
    try {
        const studentZodValidation = zod_1.z.object({
            id: zod_1.z.string(),
            name: zod_1.z.object({
                firstName: zod_1.z.string().max(20),
                MiddleName: zod_1.z.string().max(20),
            })
        });
        const { student: studentData } = req.body;
        const result = await student_service_1.studentServices.createStudentIntoDb(studentData);
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
        console.log(error);
    }
};
// get single student data by id
const getStudentById = async (req, res) => {
    const { studentId } = req.params;
    const result = await student_service_1.studentServices.singleStudentFromDb(studentId);
    res.status(200).json({
        success: true,
        message: `get student by ${studentId}`,
        data: result,
    });
};
exports.studentControllers = {
    createStudent,
    getAllStudents,
    getStudentById,
};
