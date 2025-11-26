const express = require('express')
const {getTodos, getTodoById, postTodo} = require('../controllers/todo.controller.js')

const route = express.Router()

route.get('/todos', getTodos)
route.get('/todos/:id', getTodoById)
route.post('/todos', postTodo)
module.exports = route