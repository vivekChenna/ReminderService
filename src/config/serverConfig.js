const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  EMAIL_PASSWORD: process.env.EMAIL_PASS,
  EMAIL_ID: process.env.EMAIL_ID,
};
