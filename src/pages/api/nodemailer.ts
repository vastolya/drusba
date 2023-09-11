import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function sendGmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAILUSER,
      pass: process.env.GMAILPASSWORD,
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const toHostMailData = {
    from: req.body.email,
    to: "drusbastore@gmail.com",
    subject: `${req.body.name} оставил вам сообщение!`,
    text: `${req.body.message} ${req.body.email}`,
    html: `<div>
    <p>Надо обкашлять вопросики:</p>
    <p>Имя: ${
      req.body.name == undefined ? "Нет имени" : req.body.name
    }</p>
    <p>Контакты: ${
      req.body.email == undefined ? "Почта всегда есть" : req.body.email
    }</p>   
    <p>Сообщение: ${
      req.body.message == undefined ? "Нет сообщения" : req.body.message
    }</p>
  </div>`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(toHostMailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  return res.send("some string here, why?");
}
