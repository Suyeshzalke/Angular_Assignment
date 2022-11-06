import nodemailer from "nodemailer";
import { get } from "../config";


var email = get("staging").email;
console.log(email);

export const sendmail = async (from, to, subject, text) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email.user,
      pass: email.password
    },
  });
  var mailOptions={
    from,
    to,
    subject,
  html: text,
    
  };
  transporter.sendMail(mailOptions, function(error, info){
    console.log(error)
    if (error) {
       console.log(error);
 
    } else {
       console.log('email sent: ' + info.response);
 
    }
  });
  
};















