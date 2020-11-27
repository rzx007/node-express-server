const fs = require('fs')

const content = 'Some content!'

fs.writeFile('config/user.txt', content, {
    flag: 'a+'
}, err => {
    if (err) {
        console.error(err)
        return
    }
    //file written successfully
})
fs.readFile('config/user.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})