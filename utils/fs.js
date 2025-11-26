const fs = require('fs')
const path = require("path")

const readFile = function(fileName){
    let data = fs.readFileSync(path.join(process.cwd(), 'database', fileName), 'utf-8')
    data = data ? JSON.parse(data) : []
    return data
}

const writeFile = function(fileName, data){

    fs.writeFileSync(path.join(process.cwd(), 'database', fileName), JSON.stringify(data, null, 4))
    return "Data successfully saved"
}

module.exports = {
    readFile, 
    writeFile
}