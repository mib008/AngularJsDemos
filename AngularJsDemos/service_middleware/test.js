'use strict';

function index_menu_service() {
    var colors = require("colors");
    
    function middleware(req, res, next) {
        
        console.log("Test middleware".green);
        
        res.writeHead(200);
        res.end();
        
        // middleware 1
        next();
    }
    
    return {
        middleware: middleware
    };
};

module.exports = index_menu_service;

