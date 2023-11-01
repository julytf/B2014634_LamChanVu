const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

const mongoose = require("mongoose");

mongoose
  .connect(config.db.uri, {})
  .then(() => {
    console.log("DB connect successful");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("DB connect fail");
  });
