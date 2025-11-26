const express = require('express')
const { getUser, postUser, updateUser, deleteUser } = require('../controllers/users.controller.js')
const route = express.Router()

route.get('/users', getUser)
route.post('/users', postUser)
route.put('/users/:id', updateUser)
route.delete('/users/:id', deleteUser)

module.exports = route