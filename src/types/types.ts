import { Request, Response } from "express";
export interface TypedRequestBody<T> extends Request {
    body: T;
}

export type ContactProps = {
    fullName: string;
    email: string;
    phone: string;
    school: string;
    country: string;
    schoolPage: string;
    students: number;
    role: string;
    media: string;
    message: string;
};

export type ClassCreateProps = {
    title: string;
    slug: string;
};

export type StreamCreateProps = {
    title: string;
    slug: string;
    classId: string;
};

export type ParentCreateProps = {
    title: string;
    firstName: string;
    lastName: string;
    relationship: string;
    email: string;
    NIN: string;
    gender: string; 
    dob: string;
    phone: string;
    nationality: string;
    whatsapNo: string;
    imageUrl: string;
    contactMethod: string;
    occupation: string;
    address: string;
    password: string;
  }