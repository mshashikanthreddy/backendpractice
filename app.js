//const http = require("http");

const express = require("express"); // 'express' package exports as a function (to view it preess and hold "ctrl"  and hover over "express")
 
const app = express();

app.use((req,res,next)  => {

    console.log('In the middleware');
    next();
})  // "'use' allows us to add new middleware function" which listens for every incoming request.
// 'next' is function which allows 'req' to travel to next middleware function


app.use('/',(req,res,next) => {
    console.log('In another middleware');
    res.send('<h1> hello express.js </h1>') //send allows to send a response (headers will automatically(dafault) set to text/html)
})

//const server = http.createServer();

//server.listen(3000);

app.listen(3000); // here it replace http,server with one line of code
