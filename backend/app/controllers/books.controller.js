const Book = require('../models/Book.model')
const baseController = require('./factories/base.controller')

exports.getAllPaginate = baseController.getAllPaginate(Book)

exports.getOne = baseController.getOne(Book)

exports.createOne = baseController.createOne(Book)

exports.updateOne = baseController.updateOne(Book)

exports.deleteOne = baseController.deleteOne(Book)
