// [
//     {
//         id: 1,
//         name: "Nonushta",
//         done: false,
//         user: {
//             name: "Suhrobbek",
//             phone: 99898387246
//         }
//     }
// ]
const { readFile, writeFile } = require('../utils/fs.js')

const todos = readFile('todos.json')
const users = readFile('users.json')
function getTodos(req, res) {
	let todoResult = []
	let todo = {}
	for (let i of todos) {
		;(todo['id'] = i.id), (todo['name'] = i.name)
		;(todo['done'] = i.done),
			(todo['user'] = users.find((el) => el.id == i.user_id))

		todoResult.push(todo)
	}
	return res.json({
		message: 'Success',
		todoResult,
	})
}

function getTodoById(req, res) {
	const id = req.params.id
	const todo = todos.find((el) => el.id == id)
	let resTodo = {}
	if (!todo)
		return res.json({
			message: 'todo not found',
		})
	const user = users.find((el) => el.id == todo.user_id)
	if (!user) return res.json({ message: 'User not found' })
	resTodo['id'] = todo.id
	resTodo['name'] = todo.name
	resTodo['done'] = todo.done
	resTodo['user'] = {
		name: user.name,
		phone: user.phone,
	}
	return res.json({
		message: 'Success',
		todo: resTodo,
	})
}

function postTodo(req, res) {
	const { name, user_id } = req.body
	if (!(name && user_id))
		return res.json({
			message: 'name and user id required',
		})
    const user = users.find(el => el.id == user_id)
    if(!user) res.json({status: 404, message: "User not found in this id"})
    let newTodo = {
        id: todos[todos.length - 1] ? todos[todos.length - 1].id + 1 : 1,
        name,
        done: false,
        user_id
    }
    todos.push(newTodo)
    writeFile('todos.json', todos)
    return res.json({
        status: 200,
        message: "Success",
        newTodo
    })
}

module.exports = {
	getTodos,
	getTodoById,
	postTodo,
}
