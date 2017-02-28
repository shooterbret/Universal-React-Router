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
//https://github.com/webpack/webpack/issues/1599
//http://stackoverflow.com/questions/29911491/using-webpack-on-server-side-of-nodejs
//app.close();
console.log("Server RESTARTED ------------------");
if ( app.get('env') === 'development' ) {
    console.log("Test wat?");
    app.use(webpackMiddleware(oneinstance));
    app.use(require("webpack-hot-middleware")(oneinstance,{
        reload: true
    }));
}else if (app.get('env') === 'production'){
}
//app.use(require(__dirname + "\\Routes.js"));
app.use((req, res, next) => {
    require("../public/routes.js")(req, res, next);
});
let watcher = chokidar.watch("public/routes.js");

watcher.on('change', path => {
    console.log(`File ${path} has been changed`);
    let name = require.resolve('../public/routes.js');
    delete require.cache[name];
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});