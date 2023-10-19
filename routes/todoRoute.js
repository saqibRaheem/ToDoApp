const route = require('express').Router()
const todoController = require('../controller/todoController')
const auth = require('../middleWare/auth')

route.post('/item' ,auth, todoController.todoList)
route.get('/item' ,auth, todoController.getTodoList)
route.put('/item/:id' , auth , todoController.putTodoList)
route.delete('/item/:id' , auth , todoController.delTodoList)

module.exports = route