const http = require('http');

const server = http.createServer((req, res) => { // req = request, res = response
    if(req.url === '/'){
        res.end('if /')
    }
    if(req.url === '/about'){
        res.end('if /about')
    }
    res.end(`
    <h1>No page</h1>
    <a href="/"> back home</a>
    `) // makes a link with the href that goes back to localhost:5000/
})

server.listen(5000)