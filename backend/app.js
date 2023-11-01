const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const appRouter = require("./app/routes");
const ApiError = require("./app/api-error");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to FHS API." });
});

app.use(appRouter);

app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
