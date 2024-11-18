// import {Schema, model, connect} from 'mongoose'

export interface IAddress {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
};

export interface ICourses {
    courseId: string;
    courseName: string;
    instructor: string;
    credits: number;
    grade?: string;
}

export interface IScholarships {
    name: string;
    amount: number;
    awardedDate: string;
}

export interface IAttendanceRecords {
    date: string;
    status: 'Present' | 'Absent' | 'Late';
}

export interface IStudent {
    id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gender: 'Male' | 'Female' | 'Other';
    email: string;
    phoneNumber?: string;
    address: IAddress;
    enrollmentDate: string;
    graduationDate?: string;
    courses: ICourses[];
    gpa?: number;
    major: string;
    minor?: string;
    extracurricularActivities?: string[];
    scholarships?: IScholarships[];
    attendanceRecords?: IAttendanceRecords[];
    profilePictureUrl?: string;
    notes?: string[];
    createdAt: string;
    updatedAt: string;
}

// export default IStudent;