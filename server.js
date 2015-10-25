"use strict";

var port = process.env.port || 1337;


// http - server - a localhost - p 8000 - c - 1

//var httpServer = require("http-server");


//var option = {
//    "port": port
//};

//httpServer.routes


//httpServer.createServer(option);

//console.log("Start server on port: " + option.port);

var child_process = require("child_process");

var exec = child_process.exec;

exec('npm start', function (e) {
    console.log(JSON.stringify(e));

    console.log("Start server on port: " + port);
});