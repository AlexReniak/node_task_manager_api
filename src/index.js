const express = require('express')
require('./db/mongoose')
const userRoutes = require('../src/routes/users')
const taskRoutes = require('../src/routes/tasks')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRoutes, taskRoutes)

app.listen(port, () => {
    console.log(`Server is up on port: ${port}`)
})
