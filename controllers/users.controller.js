const {readFile, writeFile} = require("../utils/fs.js")


function getUser(req, res) {
	let data = readFile('./users.json')
	return res.json({
		message: 'Success',
		data,
	})
}

const postUser = (req, res) => {
    const body = req.body
    if(!(body.firstName && body.phone && body.password)) return res.json({
        message: "All data required"
    })
    let data = readFile("./users.json")
    let user = data.find(el => el.phone == body.phone) 
    if(user) return res.json({
        message: "User already exist in this phone"
    })
    body['id'] = data[data.length - 1] ? data[data.length - 1].id  + 1 : 1
    data.push(body)
    const msg = writeFile('users.json', data)
    res.json({
        msg,
        body
    })


}

function getUserById(req, res){
    let users = readFile('./users.json')
    const id = +req.params.id
    let user = users.find(el => el.id == id)
    if (!user) return res.json({
        message: "User not found"
    })

    res.json({
        message: "Success",
        user
    })
}

function updateUser(req, res){
    let users = readFile('./users.json')
    let body = req.body
    let user = users.find(el => el.id == req.params.id)
	if (!user)
    return res.json({ 
		message: "EROR"
	})
    user.firstName = body.firstName ? body.firstName : user.firstName
    user.lastName = body.lastName ? body.lastName : user.lastName
    user.phone = body.phone ? body.phone : user.phone
    user.password = body.password ? body.password : user.password

    writeFile('./users.json', users)

    res.json({
        message: "Succsess",
        user
    })
}

function deleteUser(req, res){
    let users = readFile('./users.json')
	let id = req.params.id
	let user = users.filter(el => el.id != id)
	writeFile('./users.json', user)

	res.json({
		message: "success delete of user"
	})
}

module.exports = {
    getUser,
    postUser,
    updateUser,
    deleteUser
}