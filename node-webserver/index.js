const http = require('http')
const fs = require('fs')
const { send } = require('process')

const sendFile = (res, statusCode, filename) => {
    fs.readFile(filename, (err, data) => {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(data)
        res.end()
    })
}

http.createServer((req, res) => {

    switch (req.url) {
        case "/about":
            sendFile(res, 200, "static/about.html")
            break;
        case "/contact-me":
            sendFile(res, 200, "static/contact-me.html")
            break;
        case "/":
            sendFile(res, 200, "static/index.html")
            break;
        default:
            sendFile(res, 404, "static/404.html")
    }
    
    return res
}).listen(8080)