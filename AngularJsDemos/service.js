'use strict';

function serviceServer() {
    var connect = require('connect');
    var http = require('http');

    function createServer(port) {
        var app = connect();
        
        //// gzip/deflate outgoing responses
        //var compression = require('compression');
        //app.use(compression());
        
        //// store session state in browser cookie
        //var cookieSession = require('cookie-session');
        //app.use(cookieSession({
        //    keys: ['secret1', 'secret2']
        //}));
        
        //// parse urlencoded request bodies into req.body
        //var bodyParser = require('body-parser');
        //app.use(bodyParser.urlencoded());
        
        //// respond to all requests
        //app.use(function(req, res) {
        //    res.end('Hello from Connect!\n');
        //});

        app.use("/service/index_menu_service", require('./service_middleware/index_menu_service')().middleware);
        app.use("/service/test", require('./service_middleware/test')().middleware);
        
        //create node.js http server and listen on port
        http.createServer(app).listen(port);
    };

    return {
        createServer: createServer
    };
};

module.exports = serviceServer;

