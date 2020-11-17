require('dotenv').config();

var http = require('http');
var router = require('./router/')

var server = http.createServer(router);
server.listen(process.env.PORT);

console.log("Listening on port: " + process.env.PORT);