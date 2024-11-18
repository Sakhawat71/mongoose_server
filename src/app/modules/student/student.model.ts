import { model, Schema } from 'mongoose';
import {
  IStudent,
  IAddress,
  ICourses,
  IScholarships,
  IAttendanceRecords,
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
  grade: { type: String }, // Optional field
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

export const studentSchema = new Schema<IStudent>({
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

export const StudentModel = model<IStudent>('Student', studentSchema);
