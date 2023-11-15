const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const AppError = require('../AppError')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.json({ message: 'Welcome to FHS API.' })
})

router
  .route('/test')
  .get(authMiddleware, (req, next, res) => {
    res.json({ message: 'auth successful.' })
  })
  .post((req, res, next) => {
    res.json({ message: req.body.test })
  })

router.use('/auth', require('./auth.route'))
router.use('/books', require('./book.route'))
router.use('/cart', require('./cart.route'))
router.use('/orders', require('./order.route'))
router.use('/users', require('./user.route'))

router.use((req, res, next) => {
  return next(new AppError(404, 'Resource not found'))
})

module.exports = router
