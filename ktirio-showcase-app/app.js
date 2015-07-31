var appConfig = require('./config.js');
var express = require('express');

function createApp(config) {
    var app = express();
    app.config = config;

    app.use(express.static('public'));

    app.get('/', function (req, res) {
        res.send('Hello World!');
    });

    return app;
}

module.exports = createApp;

function startApp()  {
    "use strict";

    var app = createApp(appConfig);
    var server = app.listen(appConfig.port, function () {
        var host = server.address().address;
        var port = server.address().port;

        console.log('Example app listening at http://%s:%s', host, port);
    });
}

// Start listening if the app has been started directly
if (module === require.main) {
    var debugMode = ( process.execArgv &&
    process.execArgv[0] &&
    process.execArgv[0].indexOf('--debug') > -1);

    var simpleMode = ( process.argv[2] == 'simple' );

    if (debugMode || simpleMode) {
        startApp();
    } else {
        console.log('not started');
    }

}



