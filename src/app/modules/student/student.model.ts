import { model, Schema } from 'mongoose';
import {
  IStudent,
  IAddress,
  ICourses,
  IScholarships,
  IAttendanceRecords,
  TName,
} from './student.interface';

const addressSchema = new Schema<IAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
});

const courseSchema = new Schema<ICourses>({
  courseId: { type: String, required: true },
  courseName: { type: String, required: true },
  instructor: { type: String, required: true },
  credits: { type: Number, required: true },
  grade: { type: String },
});

const scholarshipsSchema = new Schema<IScholarships>({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  awardedDate: { type: String, required: true },
});

const attendanceSchema = new Schema<IAttendanceRecords>({
  date: { type: String, required: true },
  status: { type: String, enum: ['Present', 'Absent', 'Late'], required: true },
});

const nameSchema = new Schema<TName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    maxlength: [20, 'First name cannot be longer than 20 characters'],
    minlength: [2, 'First name must be at least 2 characters'],
    trim: true,
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
  },
})

export const studentSchema = new Schema<IStudent>({
  id: { type: String, required: true, unique: true },
  name: {
    type: nameSchema,
    required: true,
  },
  dateOfBirth: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String },
  address: {
    type: addressSchema,
    require: true
  },
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

export const StudentModel = model<IStudent>('Student', studentSchema);
