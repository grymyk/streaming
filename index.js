'use strict';

global.api = {};

let http = require('http');
let config = require('./config.js');

const PORT = process.env.PORT || config.port;

let server = new http.Server();

server.on('request', require('./handler.js') );

server.listen(PORT, () => {
    console.log('Listening at http://%s:%s/', config.host, PORT);
});

