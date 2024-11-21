import Joi from 'joi';

// Address JoiSchema
const addressJoiSchema = Joi.object({
    street: Joi.string().required().messages({
        'string.base': 'Street must be a string',
        'any.required': 'Street address is required',
    }),
    city: Joi.string().required().messages({
        'string.base': 'City must be a string',
        'any.required': 'City is required',
    }),
    state: Joi.string().required().messages({
        'string.base': 'State must be a string',
        'any.required': 'State is required',
    }),
    postalCode: Joi.string().required().messages({
        'string.base': 'Postal code must be a string',
        'any.required': 'Postal code is required',
    }),
    country: Joi.string().required().messages({
        'string.base': 'Country must be a string',
        'any.required': 'Country is required',
    }),
});

// Courses JoiSchema
const courseJoiSchema = Joi.object({
    courseId: Joi.string().required().messages({
        'any.required': 'Course ID is required',
    }),
    courseName: Joi.string().required().messages({
        'any.required': 'Course name is required',
    }),
    instructor: Joi.string().required().messages({
        'any.required': 'Instructor name is required',
    }),
    credits: Joi.number().required().messages({
        'any.required': 'Course credits are required',
    }),
    grade: Joi.string().optional(),
});

// Scholarships JoiSchema
const scholarshipsJoiSchema = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'Scholarship name is required',
    }),
    amount: Joi.number().required().messages({
        'any.required': 'Scholarship amount is required',
    }),
    awardedDate: Joi.string().required().messages({
        'any.required': 'Award date is required',
    }),
});

// Attendance Records JoiSchema
const attendanceJoiSchema = Joi.object({
    date: Joi.string().required().messages({
        'any.required': 'Attendance date is required',
    }),
    status: Joi.string()
        .valid('Present', 'Absent', 'Late')
        .required()
        .messages({
            'any.required': 'Attendance status is required',
            'any.only': 'Status must be one of Present, Absent, or Late',
        }),
});

// Name JoiSchema
const nameJoiSchema = Joi.object({
    firstName: Joi.string()
        .min(2)
        .max(20)
        .required()
        .pattern(/^[A-Z]/)
        .messages({
            'string.min': 'First name must be at least 2 characters',
            'string.max': 'First name cannot be longer than 20 characters',
            'any.required': 'First name is required',
            'string.pattern.base': 'First name must start with a capital letter',
        }),
    middleName: Joi.string().optional().allow('').messages({
        'string.base': 'Middle name must be a string',
    }),
    lastName: Joi.string()
        .min(2)
        .max(20)
        .required()
        .pattern(/^[A-Za-z]+$/)
        .messages({
            'string.min': 'Last name must be at least 2 characters',
            'string.max': 'Last name cannot be longer than 20 characters',
            'any.required': 'Last name is required',
            'string.pattern.base': 'Last name must only contain letters',
        }),
});

// Student JoiSchema
export const studentJoiSchema = Joi.object({
    id: Joi.string().required().messages({
        'any.required': 'Student ID is required',
    }),
    name: nameJoiSchema.required().messages({
        'any.required': 'Student name is required',
    }),
    dateOfBirth: Joi.string().required().messages({
        'any.required': 'Date of birth is required',
    }),
    gender: Joi.string()
        .valid('Male', 'Female', 'Other')
        .required()
        .messages({
            'any.required': 'Gender is required',
            'any.only': 'Gender must be Male, Female, or Other',
        }),
    email: Joi.string().email().required().messages({
        'string.email': 'Email must be a valid email address',
        'any.required': 'Email is required',
    }),
    phoneNumber: Joi.string().optional(),
    address: addressJoiSchema.required().messages({
        'any.required': 'Address is required',
    }),
    enrollmentDate: Joi.string().required().messages({
        'any.required': 'Enrollment date is required',
    }),
    graduationDate: Joi.string().optional(),
    courses: Joi.array().items(courseJoiSchema).optional(),
    gpa: Joi.number().optional(),
    major: Joi.string().required().messages({
        'any.required': 'Major is required',
    }),
    minor: Joi.string().optional(),
    extracurricularActivities: Joi.array().items(Joi.string()).optional(),
    scholarships: Joi.array().items(scholarshipsJoiSchema).optional(),
    attendanceRecords: Joi.array().items(attendanceJoiSchema).optional(),
    profilePictureUrl: Joi.string().optional(),
    notes: Joi.array().items(Joi.string()).optional(),
    createdAt: Joi.string().required().messages({
        'any.required': 'Created at date is required',
    }),
    updatedAt: Joi.string().required().messages({
        'any.required': 'Updated at date is required',
    }),
});

/**
 * 
 
import { studentJoiSchema } from './student.joi-validate';


// create singel student
const createStudent = async (req: Request, res: Response) => {
    try {

        const { student: studentData } = req.body;

        const { error,value } = studentJoiSchema.validate(studentData);
        if (error) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed for student data',
                error: error.details,
            });
        }

        const result = await studentServices.createStudentIntoDb(value);

        res.status(201).json({
            seccess: true,
            message: 'Student is created succesfully',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            seccess: false,
            message: 'Student can`t created',
            data: error,
        });
    }
};


 */