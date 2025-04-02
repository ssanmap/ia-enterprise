import nodemailer from 'nodemailer';
import { ContactFormData } from '../types/form-types';

export const sendEmail = async (data: ContactFormData) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD, 
    },
  });

  await transporter.sendMail({
    from: data.email,
    to: 'tuemail@solveria.cl',
    subject: `Nuevo mensaje de ${data.name}`,
    text: data.message,
  });
};