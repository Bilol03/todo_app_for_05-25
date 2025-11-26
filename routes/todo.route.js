const express = require('express')
const {getTodos} = require('../controllers/todo.controller.js')

const route = express.Router()

route.get('/todos', getTodos)
module.exports = route