const http = require('http');

const server = http.createServer((req, res) => { // req = request, res = response
    if(req.url === '/'){
        res.end('if /')
    }
    if(req.url === '/about'){
        // blocking code represented by a nested for loop
        // only when the '/about' page has been loaded, can any other page be loaded
        // this is for all users using the page, it doesn't just block the user who ran the /about page
        // that is synchonous, hence need to do asynchonous
        for(let i=0; i< 1000; i++) {
            for(let j=0; j< 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('if /about')
    }
    res.end(`
    <h1>No page</h1>
    <a href="/"> back home</a>
    `) // makes a link with the href that goes back to localhost:5000/
})

server.listen(5000)