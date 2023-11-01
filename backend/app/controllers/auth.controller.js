const config = require("./app/config");
const User = require("../models/User.model");

exports.register = async function (req, res, next) {
  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
  });

  const token = jwt.sign(
    {
      _id: user._id,
    },
    config.jwt.key
  );

  return res.status(200).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.login = async function (req, res, next) {
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (!user) return next(new Error("Unauthorized!"));

  const token = jwt.sign(
    {
      _id: user._id,
    },
    config.jwt.key
  );

  return res.status(200).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};
