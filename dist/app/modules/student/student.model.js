"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = exports.studentSchema = void 0;
const mongoose_1 = require("mongoose");
const addressSchema = new mongoose_1.Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
});
const courseSchema = new mongoose_1.Schema({
    courseId: { type: String, required: true },
    courseName: { type: String, required: true },
    instructor: { type: String, required: true },
    credits: { type: Number, required: true },
    grade: { type: String }, // Optional field
});
const scholarshipsSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    awardedDate: { type: String, required: true },
});
const attendanceSchema = new mongoose_1.Schema({
    date: { type: String, required: true },
    status: { type: String, enum: ['Present', 'Absent', 'Late'], required: true },
});
exports.studentSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String },
    address: { type: addressSchema, require: true },
    enrollmentDate: { type: String, required: true },
    graduationDate: { type: String },
    courses: [courseSchema],
    gpa: { type: Number },
    major: { type: String, required: true },
    minor: { type: String },
    extracurricularActivities: { type: [String] },
    scholarships: [scholarshipsSchema],
    attendanceRecords: [attendanceSchema],
    profilePictureUrl: { type: String },
    notes: { type: [String] },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true },
});
exports.StudentModel = (0, mongoose_1.model)('Student', exports.studentSchema);
