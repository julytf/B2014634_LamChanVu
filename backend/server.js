const app = require("./app");
const config = require("./app/config");

const mongoose = require("mongoose");

mongoose
  .connect(config.db.uri, {})
  .then(() => {
    console.log("DB connect successful");
    app.listen(config.app.port, () => {
      console.log(`Server is running on port ${config.app.port}`);
    });
  })
  .catch(() => {
    console.log("DB connect fail");
  });
