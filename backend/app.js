const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const appRouter = require('./app/routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', appRouter)

app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || 'Internal Server Error',
  })
})

module.exports = app
