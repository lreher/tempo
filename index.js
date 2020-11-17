require('dotenv').config();

var http = require('http');
var router = require('./router/')

var server = http.createServer()
server.listen(8090);
