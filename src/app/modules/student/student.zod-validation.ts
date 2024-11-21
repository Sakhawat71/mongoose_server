// validation

import { z } from 'zod';

// Address Schema
const addressZodSchema = z.object({
  street: z.string().min(1, 'Street address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  postalCode: z.string().min(1, 'Postal code is required'),
  country: z.string().min(1, 'Country is required'),
});

// Courses Schema
const courseZodSchema = z.object({
  courseId: z.string().min(1, 'Course ID is required'),
  courseName: z.string().min(1, 'Course name is required'),
  instructor: z.string().min(1, 'Instructor name is required'),
  credits: z.number().min(0, 'Course credits are required'),
  grade: z.string().optional(),
});

// Scholarships Schema
const scholarshipsZodSchema = z.object({
  name: z.string().min(1, 'Scholarship name is required'),
  amount: z.number().min(0, 'Scholarship amount is required'),
  awardedDate: z.string().min(1, 'Award date is required'),
});

// Attendance Records Schema
const attendanceZodSchema = z.object({
  date: z.string().min(1, 'Attendance date is required'),
  status: z.enum(['Present', 'Absent', 'Late'], {
    required_error: 'Attendance status is required',
  }),
});

// Name Schema
const nameZodSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(20, 'First name cannot be longer than 20 characters')
    .refine(
      (value) => value.charAt(0) === value.charAt(0).toUpperCase(),
      'First name must start with a capital letter'
    ),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(20, 'Last name cannot be longer than 20 characters')
    .refine((value) => /^[A-Za-z]+$/.test(value), 'Last name must contain only letters'),
});

// Main Student Schema
const studentZodSchema = z.object({
  id: z.string().min(1, 'Student ID is required'),
  name: nameZodSchema,
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  gender: z.enum(['Male', 'Female', 'Other'], { required_error: 'Gender is required' }),
  email: z.string().email('Invalid email format'),
  phoneNumber: z.string().optional(),
  address: addressZodSchema,
  enrollmentDate: z.string().min(1, 'Enrollment date is required'),
  graduationDate: z.string().optional(),
  courses: z.array(courseZodSchema),
  gpa: z.number().min(0).max(4).optional(),
  major: z.string().min(1, 'Major is required'),
  minor: z.string().optional(),
  extracurricularActivities: z.array(z.string()).optional(),
  scholarships: z.array(scholarshipsZodSchema).optional(),
  attendanceRecords: z.array(attendanceZodSchema).optional(),
  profilePictureUrl: z.string().url('Invalid URL format').optional(),
  notes: z.array(z.string()).optional(),
  createdAt: z.string().min(1, 'Created at date is required'),
  updatedAt: z.string().min(1, 'Updated at date is required'),
});

// Export Zod Schema
export {
  addressZodSchema,
  courseZodSchema,
  scholarshipsZodSchema,
  attendanceZodSchema,
  nameZodSchema,
  studentZodSchema,
};
