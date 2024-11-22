"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = exports.studentSchema = void 0;
const mongoose_1 = require("mongoose");
const validator_1 = __importDefault(require("validator"));
// Address Schema
const addressSchema = new mongoose_1.Schema({
    street: { type: String, required: [true, 'Street address is required'] },
    city: { type: String, required: [true, 'City is required'] },
    state: { type: String, required: [true, 'State is required'] },
    postalCode: { type: String, required: [true, 'Postal code is required'] },
    country: { type: String, required: [true, 'Country is required'] },
});
// Courses Schema
const courseSchema = new mongoose_1.Schema({
    courseId: { type: String, required: [true, 'Course ID is required'] },
    courseName: { type: String, required: [true, 'Course name is required'] },
    instructor: { type: String, required: [true, 'Instructor name is required'] },
    credits: { type: Number, required: [true, 'Course credits are required'] },
    grade: { type: String },
});
// Scholarships Schema
const scholarshipsSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, 'Scholarship name is required'] },
    amount: { type: Number, required: [true, 'Scholarship amount is required'] },
    awardedDate: { type: String, required: [true, 'Award date is required'] },
});
// Attendance Records Schema
const attendanceSchema = new mongoose_1.Schema({
    date: { type: String, required: [true, 'Attendance date is required'] },
    status: {
        type: String,
        enum: ['Present', 'Absent', 'Late'],
        required: [true, 'Attendance status is required']
    },
});
// Name Schema
const nameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        maxlength: [20, 'First name cannot be longer than 20 characters'],
        minlength: [2, 'First name must be at least 2 characters'],
        trim: true,
        validate: {
            validator: function (value) {
                const validName = value.charAt(0).toUpperCase() + value.slice(1);
                return validName === value;
            },
            message: '{VALUE} is not capitalize format'
        },
    },
    middleName: {
        type: String,
        trim: true,
        default: '',
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        maxlength: [20, 'Last name cannot be longer than 20 characters'],
        minlength: [2, 'Last name must be at least 2 characters'],
        trim: true,
        validate: {
            validator: (value) => validator_1.default.isAlpha(value),
            message: '{VALUE} is not valid type'
        }
    },
});
// Student Schema
exports.studentSchema = new mongoose_1.Schema({
    id: { type: String, required: [true, 'Student ID is required'], unique: true },
    name: { type: nameSchema, required: [true, 'Student name is required'], },
    dateOfBirth: { type: String, required: [true, 'Date of birth is required'] },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: [true, 'Gender is required'] },
    email: { type: String, required: [true, 'Email is required'], unique: true },
    phoneNumber: { type: String },
    address: { type: addressSchema, required: [true, 'Address is required'], },
    enrollmentDate: { type: String, required: [true, 'Enrollment date is required'] },
    graduationDate: { type: String },
    courses: [courseSchema],
    gpa: { type: Number },
    major: { type: String, required: [true, 'Major is required'] },
    minor: { type: String },
    extracurricularActivities: { type: [String] },
    scholarships: [scholarshipsSchema],
    attendanceRecords: [attendanceSchema],
    profilePictureUrl: { type: String },
    notes: { type: [String] },
    createdAt: { type: String, required: [true, 'Created at date is required'] },
    updatedAt: { type: String, required: [true, 'Updated at date is required'] },
});
// pre save middleware
exports.studentSchema.pre('save', function () {
    console.log(this, "pre hook : we will save to data");
});
exports.studentSchema.post('save', function () {
    console.log(this, "post hook : we save to data");
});
// Exporting Student Model
exports.StudentModel = (0, mongoose_1.model)('Student', exports.studentSchema);
