const http = require('http')

const options = {
    port:'3000',
    path: '/todos',
    method: 'GET'
}

const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.end()

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello, World!</h1>')
})
server.listen(3000, () => {
    console.log(`Server running at port 3000`)
})