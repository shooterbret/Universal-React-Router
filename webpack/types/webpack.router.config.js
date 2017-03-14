const merge = require('webpack-merge');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');
const baseConfig = require('../modes/webpack.development.config');
let nodeModules = {};


const PATHS = {
   // app: path.join(__dirname, "./../../server/Server"),
    app: path.join(__dirname, "./../../server/Routes"),
    public: path.join(__dirname,"./../../public/"),
    private: path.join(__dirname,"./../../PrivateBuild/")
};


fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    }); //Needed in order to allow all node modules so server side compile


const lconfig = {
    entry: PATHS.app,
    target: 'node',
    context: path.resolve(__dirname, '../..'),
    node: {
        __filename: false,
        __dirname: true,
    },
    output: {
        //filename: 'server.js',
        filename: 'routes.js',
        library: '',
        libraryTarget: "commonjs2",
        path: PATHS.private,
        publicPath: "http://localhost:3000/"
    },
    watch: true,
    externals: nodeModules,
    plugins: [
        new webpack.DefinePlugin({
            $dirname: '__dirname',
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true,
        }),
        new WebpackShellPlugin({onBuildStart:['echo "Compiling Server...."'], onBuildEnd:['echo "Starting Node Server...."','npm start']})
    ]
};

module.exports = merge(baseConfig, lconfig);