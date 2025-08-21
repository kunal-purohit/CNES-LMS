import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import Contact, { IContact } from '../models/contact.model';

export const submitContactForm = async (req: Request, res: Response): Promise<void> => {
  const { name, email, message } = req.body;

  const newContact: IContact = new Contact({ name, email, message });

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: 'contactus@cnes.online',
    subject: `Contact form submission from ${name}`,
    text: message,
  };

  try {
    await newContact.save();
    await transporter.sendMail(mailOptions);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Failed to send message');
  }
};
