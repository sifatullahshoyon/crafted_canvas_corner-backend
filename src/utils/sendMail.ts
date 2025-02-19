import nodemailer from 'nodemailer';
import config from '../app/config';

const sendMail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: config.send_mail_auth_user,
      pass: config.send_mail_auth_pass,
    },
  });

  await transporter.sendMail({
    from: 'Crafted Canvas Corner', // sender address
    to, // list of receivers
    subject,
    text: 'Hello world?', // plain text body
    html,
  });
};

export default sendMail;
