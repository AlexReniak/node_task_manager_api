const express = require('express')
require('./db/mongoose')
const userRoutes = require('../src/routes/users')
const taskRoutes = require('../src/routes/tasks')

const app = express()

app.use(express.json())
app.use(userRoutes, taskRoutes)


module.exports = app