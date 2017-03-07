/**
 * Created by shooterbret on 3/6/2017.
 */


module.exports = (app) => {
    const webpack = require('webpack');
    const webpackMiddleware = require("webpack-dev-middleware");
    const oneinstance = webpack(require('../../webpack/types/webpack.client.config'));
    const chokidar = require('chokidar');
    const routeBuildDirectory = "../../PrivateBuild/routes.js";
    let RouteFile; //Do not touch this, It preloads the routes file.
    const watcher = chokidar.watch(routeBuildDirectory.substring(4)); //Chokiar runs globally.
    const timeOut = 5;
    watcher.on('change', path => setTimeout(() => {
        console.log(`File ${path} has been changed`);
        reloadModuleCache();
    }, 50));
    //Set timeout is needed because the webpack lifecycle must have a chance to run before updating
    //Could also be that webpack needs a little extra time to finish (50ms for this cpu)

    app.use(webpackMiddleware(oneinstance));
    app.use(require("webpack-hot-middleware")(oneinstance, {
                noInfo: true, reload: true
            }));
if (RouteFile == null) {
    console.log("Loading Routes Module.");
    requireModule("Routes Module Loaded");
}else{
    console.log("Server Is Reloading This File. Please Disable Nodemon, This breaks important middleware.")
}

    function reloadModuleCache() {
        console.log("Reloading Cache...");
        let name = require.resolve(routeBuildDirectory);
        delete require.cache[name];
        requireModule("Server Has Reloaded Routes Module");
    }

    function requireModule(Text) {
        try {
            RouteFile = require(routeBuildDirectory);
            console.log(Text);
            addRoutes()
        }
        catch (e) {
            console.log("The Server Has Crashed In Require Phase. Will now attempt to restart In: " + timeOut + " Seconds...");
            setTimeout(() => {
                reloadModuleCache()
            }, timeOut * 1000)
        }
    }


    function addRoutes() {
        try {
            app.use((req, res, next) => {
                RouteFile(req, res, next);
            });
        } catch (err) {
            console.log(err);
            console.log("The Server Has Crashed In Middleware Phase. Will now attempt to restart In: " + timeOut + " Seconds...");
            setTimeout(() => {
                reloadModuleCache()
            }, timeOut * 1000)
        }
    }
};