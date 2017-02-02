'use strict';

api.Stream = require('node-rtsp-stream');

let options = {
    name: 'maria',
    streamUrl: 'rtsp://184.72.239.149/vod/mp4:BigBuckBunny_115k.mov',
    wsPort: 9999
};

module.exports = new apl.Stream(options);

