'use strict';

const router = require('./router.js');

module.exports = (req, res) => {
    let result = router({req, res});
    
    res.writeHead(200);
    res.end(result);
};

