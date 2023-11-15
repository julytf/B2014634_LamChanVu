const User = require('../models/User.model')
const config = require('../config')
const jwt = require('jsonwebtoken')
const AppError = require('../AppError')

async function isAdmin(req, res, next) {
  if (req.user?.role != 'admin') return next(new AppError(401, 'Action forbidden.'))

  return next()
}

module.exports = isAdmin
