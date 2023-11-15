const express = require('express')
const usersController = require('../controllers/users.controller')
const authMiddleware = require('../middlewares/auth.middleware')

const router = express.Router()

router.use(authMiddleware)

router.route('/').get(usersController.getAll)
router.route('/:id').put(usersController.updateOne)

module.exports = router
