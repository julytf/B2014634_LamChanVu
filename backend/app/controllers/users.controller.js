const User = require('../models/User.model')
const AppError = require('../AppError')
const baseController = require('./factories/base.controller')

exports.updateOne = async function (req, res, next) {
  console.log(req.user?.role, req.user?._id, req.params.id)
  if (req.user?.role != 'admin' && req.user?._id != req.params.id) {
    return next(new AppError(401, 'Action forbidden.'))
  }
  return baseController.updateOne(User)(req, res, next)
}
exports.getAll = baseController.getAll(User)