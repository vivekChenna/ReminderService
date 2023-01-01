const express = require("express");

const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

const sendBasicEmail = require("./services/email-service");

const setupAndStartServer = () => {
  const app = express();

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    sendBasicEmail(
      "support@admin.com",
      "vivekchenna1508@gmail.com",
      "testing",
      "Hey how are you Man? Happy New Year!"
    );
    console.log(`server started successfully at PORT ${PORT}`);
  });
};

setupAndStartServer();
