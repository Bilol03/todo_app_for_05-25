const express = require('express')
const {getTodos, getTodoById} = require('../controllers/todo.controller.js')

const route = express.Router()

route.get('/todos', getTodos)
route.get('/todos/:id', getTodoById)
module.exports = route