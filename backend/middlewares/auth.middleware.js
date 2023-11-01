const User = require("@/models/User.model");
const AppError = require("@/utils/AppError");
const config = require("./app/config");
const jwt = require("jsonwebtoken");

async function auth(req, res, next) {
  if (req.user) return next();

  const token =
    req.headers?.authorization?.replace("Bearer ", "") || req.cookies.jwt;

  if (!token) return next(new Error("Unauthorized!"));

  let decoded;
  try {
    decoded = jwt.verify(token, config.jwt.key);
  } catch (err) {
    return next(err);
  }
  const user = await User.findById(decoded._id);
  console.log("auth - ", user._id);

  if (!user) return next(new Error("Unauthorized!"));

  req.user = user;

  return next();
}

module.exports = auth;
