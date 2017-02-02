'use strict';

api.fs = require('fs');

module.exports = (client) => {
    let req = client.req;
    let res = client.res;

    if (req.url === '/') {
        if (req.method === 'GET') {
            res.writeHead(200, {
                'Set-Cookie': 'mycookie=test',
                'Content-Type': 'text/html'
            });

            let ip = req.connection.remoteAddress;

            res.write('<h1>Welcome!</h1>Your IP: ' + ip);
            res.end();
        }
    } else {
        res.writeHead(404);
        res.end('Page Not found');
	}
};
