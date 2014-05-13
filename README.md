Meter
==========================
A middleware for limiting number of requests per second to an HTTP server from a given client IP address. Can be used anywhere that the (req, res, next) signature is used.

###Usage
    var express = require('express');
    var app = express();

    var meter = require('meter');

    app.use(meter());

Example using a defined rate - in requests per second.

    app.use(meter({rate:10}));
    
###Options
	rate - reqs/sec - default 25
	