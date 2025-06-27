const http = require('http'); 

const routes = require('./routes'); // we can only imported files but cannot change its original content.

const server = http.createServer(routes.handler);

server.listen(4000);
