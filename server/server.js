var express = require('express');
var server = express();
var port = 20080;

server.use(express.static(__dirname + '/../client'));
server.listen(port);

console.log(`Server listening at localhost ${port}/`);
