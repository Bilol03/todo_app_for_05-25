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
const {readFile} = require('../utils/fs.js')

function getTodos(req, res) {
    const todos = readFile("todos.json")
    const users = readFile('users.json')
    let todoResult = []
    let todo = {}
    for (let i of todos) {
        todo['id'] = i.id,
        todo['name'] = i.name
        todo['done'] = i.done,
        todo['user'] = users.find(el => el.id == i.user_id)

        todoResult.push(todo)
    }
    return res.json({
        message: "Success",
        todoResult
    })
}


module.exports = {
    getTodos
}