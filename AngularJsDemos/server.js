"use strict";

var port = process.env.port || 1023;

var child_process = require("child_process"),
    path = require("path");

var basePath = __dirname;

var cmd = path.join(basePath, "./node_modules/.bin/http-server");

console.log("CMD: " + cmd + " Port: " + port);

var app = child_process.exec(cmd, [], {}, function (e, stdout, stderr) {
    if (e) console.log(JSON.stringify(e));

    console.log(stdout);
    console.log(stderr); 
});

app.stdout.resume();

app.stdout.on('data', function(data) {
    console.log(data);
});


var serviceServer = require("./service")();

serviceServer.createServer(1024);