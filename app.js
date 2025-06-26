const http = require('http'); // by using "require" we can import our own files,modules(global and local) to work on present files

// function rqListener(req,res) {

// }

// http.createServer(rqListener);

const server = http.createServer((req,res) => {
    console.log(req);
})
//createServer method actually returns a Server.

server.listen(4000);
