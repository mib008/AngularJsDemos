"use strict";

var port = process.env.port || 1337;

var child_process = require("child_process"),
    path = require("path");

var spawn = child_process.spawn;

var basePath = __dirname;

var cmd = path.join(basePath, "./node_modules/.bin/http-server");

console.log("CMD: " + cmd);

var app = child_process.exec(cmd, ['-a','localhost','-p', port, '-c-1'], {}, function (e, stdout, stderr) {
    if (e) console.log(JSON.stringify(e));

    console.log(stdout);
    console.log(stderr); 
});

app.stdout.resume();

app.stdout.on('data', function(data) {
    console.log(data);
});
