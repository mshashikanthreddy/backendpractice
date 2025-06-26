const http = require('http'); // by using "require" we can import our own files,modules(global and local) to work on present files

// function rqListener(req,res) {

// }

// http.createServer(rqListener);

const server = http.createServer((req,res) => {

    console.log(req.url, req.method ,req.headers);
    //process.exit(); //hard exit and close server
    res.setHeader('Content-Type','text/html'); // default header will be a text/html
    res.write('<html>');
    res.write('<head><title> my first page</title></head>');
    res.write('<body><h1>hello from my Node.js server</h1></body>');
    res.write('</html>');
    res.end();

})
//createServer method actually returns a Server.

server.listen(4000);
