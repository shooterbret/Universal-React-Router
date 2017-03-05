let express = require('express');

let app = express();
let path = require('path');
let favicon = require('serve-favicon');
import webpack from 'webpack';
const webpackMiddleware = require("webpack-dev-middleware");
app.use(favicon(__dirname + './../public/favicon.ico')); //Handles FavIcon
app.use(express.static('public'));
let oneinstance = webpack(require('../webpack/types/webpack.client.config'));
let chokidar = require('chokidar');
let watcher = chokidar.watch("public/routes.js");
const routeBuildDirectory = "../PrivateBuild/routes.js";
let RouteFile = require(routeBuildDirectory); //Do not touch this, It preloads the routes file.
//https://github.com/webpack/webpack/issues/1599
//http://stackoverflow.com/questions/29911491/using-webpack-on-server-side-of-nodejs
//app.close();

console.log("Server RESTARTED ------------------");

function AddRoutes(){
    app.use((req, res, next) => {
        RouteFile(req, res, next);
    });
}
if ( app.get('env') === 'development' ) {
    watcher.on('change', path => {
        console.log(`File ${path} has been changed`);
        let name = require.resolve(routeBuildDirectory);
        delete require.cache[name];
        setTimeout(() => {RouteFile = require(routeBuildDirectory);console.log("Server Has Refreshed SSR"); AddRoutes()},50);
        //Set timeout is needed because the webpack lifecycle must have a chance to run before updating
        //Could also be that webpack needs a little extra time to finish (50ms for this cpu)
    });

    app.use(webpackMiddleware(oneinstance));
    app.use(require("webpack-hot-middleware")(oneinstance,{
        noInfo: true, reload:true
    }));

    if (RouteFile != null) {
        AddRoutes();
    }
}else if (app.get('env') === 'production'){
}
//app.use(require(__dirname + "\\Routes.js"));


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});