const sender = require("../config/email-Config");

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailText) => {
  try {
    const response = await sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailText,
    });
  } catch (error) {
    console.log(error);

    console.log("something went wrong in the sending the email");
  }
};

module.exports = sendBasicEmail;
