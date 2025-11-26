const express = require('express')
const userRoute = require('./routes/users.route.js')
const todoRoute = require('./routes/todo.route.js')
const app = express()

app.use(express.json())
app.use(userRoute)
app.use(todoRoute)

app.listen(4000, () => console.log("*4000"))