'use strict';

function index_menu_service() {
    
    var rd = require('rd'),
        path = require('path');
    
    function middleware(req, res, next) {
        
        try {
            
            var files = [];
            
            //                                             DemoPages/A01HelloWorld.html
            // D:\GitHub\AngularJsDemos\AngularJsDemos\app\DemoPages\A01HelloWorld.html
            
            console.log("path.dirname('./app/DemoPages'): " + path.dirname('./app/DemoPages'));
            
            rd.eachFileSync('./app/DemoPages', function (f, s) {
                if (f.match(/.+?\.html/)) {
                    files.push(
                        {
                            "name": path.basename(f, ".html"),
                            "path": f,
                            "url": f.replace(path.resolve('./app') + "\\", '').replace(/\\/g, '/')
                        });
                }
            });
            
            for (var i = 0; i < files.length; i++) {
                console.log("File " + JSON.stringify(files[i]));
            }
            
            res.writeHead(200);
            res.write(JSON.stringify(files));
            res.end();
        } catch (e) {
            res.writeHead(500);
            res.write(JSON.stringify(e));
            res.end();
        }
        
        next();
    }
    
    return {
        middleware: middleware
    };
};

module.exports = index_menu_service;

