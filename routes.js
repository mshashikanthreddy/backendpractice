const fs = require("fs");

const requestHandler = ((req,res) => {

    const url = req.url;
    const method = req.method;

    if(url === '/')
    {  
        res.write('<html>');
        res.write(`<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">submit</button></form></body>`);
        res.write('</html>');
        return res.end();
    }
    if(url === "/message" && method === "POST")
    {
        const body = [] ; // we reassign body object but we can change the data in the object.
        req.on('data' ,(chunk) => {
            body.push(chunk);
        })//req adds a listener function

        return req.on('end' , () => {  //here we should return if not it registers callback and move on to next code and comes once it finishes and again executes below.
            const parsedBody = Buffer.concat(body).toString(); // here we concatinate chunks of body and convert to a string.
            const message = parsedBody.split('=')[0];
            fs.writeFile('message.txt',message,(err) => { 
                        

                res.statusCode = 302;
                res.setHeader("Location","/");  // we have to use "writeFile" so that it makes it asynchoronously (callback) and not pause the file to create. 
                return res.end();                // fs.writeFileSync('message.txt','DUMMY'); // here while using "sync" it stops execution till file is created.*/

            });
        })
    }
    res.setHeader('Content-Type','text/html'); 
    res.write('<html>');
    res.write('<head><title> my first page</title></head>');
    res.write('<body><h1>hello from my Node.js server</h1></body>');
    res.write('</html>');
    res.end();

})

module.exports = 
{
    handler : requestHandler,
    someText : 'some Hard coded Text'
}

//module.exports.handler = requesthandler;

//exports.handler = requestHandler;