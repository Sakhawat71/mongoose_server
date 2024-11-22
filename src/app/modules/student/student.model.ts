import { model, Schema } from 'mongoose';
import {
    IStudent,
    IAddress,
    ICourses,
    IScholarships,
    IAttendanceRecords,
    TName,
} from './student.interface';
import validator from 'validator';
import bcrypt from 'bcrypt'
import config from '../../config';

// Address Schema
const addressSchema = new Schema<IAddress>({
    street: { type: String, required: [true, 'Street address is required'] },
    city: { type: String, required: [true, 'City is required'] },
    state: { type: String, required: [true, 'State is required'] },
    postalCode: { type: String, required: [true, 'Postal code is required'] },
    country: { type: String, required: [true, 'Country is required'] },
});

// Courses Schema
const courseSchema = new Schema<ICourses>({
    courseId: { type: String, required: [true, 'Course ID is required'] },
    courseName: { type: String, required: [true, 'Course name is required'] },
    instructor: { type: String, required: [true, 'Instructor name is required'] },
    credits: { type: Number, required: [true, 'Course credits are required'] },
    grade: { type: String },
});

// Scholarships Schema
const scholarshipsSchema = new Schema<IScholarships>({
    name: { type: String, required: [true, 'Scholarship name is required'] },
    amount: { type: Number, required: [true, 'Scholarship amount is required'] },
    awardedDate: { type: String, required: [true, 'Award date is required'] },
});

// Attendance Records Schema
const attendanceSchema = new Schema<IAttendanceRecords>({
    date: { type: String, required: [true, 'Attendance date is required'] },
    status: {
        type: String,
        enum: ['Present', 'Absent', 'Late'],
        required: [true, 'Attendance status is required']
    },
});

// Name Schema
const nameSchema = new Schema<TName>({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        maxlength: [20, 'First name cannot be longer than 20 characters'],
        minlength: [2, 'First name must be at least 2 characters'],
        trim: true,
        validate: {
            validator: function (value: string) {
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
            validator: (value: string) => validator.isAlpha(value),
            message: '{VALUE} is not valid type'
        }
    },
});

// Student Schema
export const studentSchema = new Schema<IStudent>({
    id: { type: String, required: [true, 'Student ID is required'], unique: true },
    password: { type: String, required: [true, 'Password is required'] },
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
    isDeleted: {type : Boolean, default: false}
});


// pre save middleware
studentSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this;
    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds)
    );
    next();
})


// post save middleware
studentSchema.post('save', function (doc, next) {
    doc.password = "";
    next()
})


// Exporting Student Model
export const StudentModel = model<IStudent>('Student', studentSchema);