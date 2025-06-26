const http = require('http'); 

const fs = require("fs");

const server = http.createServer((req,res) => {

    const url = req.url;
    const method = req.method;
    if(url === '/')
    {
        res.write('<html>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === "/message" && method === "POST")
    {
        fs.writeFileSync('message.txt','DUMMY');
        res.statusCode = 302;
        res.setHeader("Location","/");
        return res.end();
    }
    res.setHeader('Content-Type','text/html'); 
    res.write('<html>');
    res.write('<head><title> my first page</title></head>');
    res.write('<body><h1>hello from my Node.js server</h1></body>');
    res.write('</html>');
    res.end();

})
//createServer method actually returns a Server.

server.listen(4000);
