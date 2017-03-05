let merge = require('webpack-merge');
let path = require('path');
let fs = require('fs');
let webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin');

let baseConfig = require('../modes/webpack.development.config');
const PATHS = {
   // app: path.join(__dirname, "./../../server/Server"),
    app: path.join(__dirname, "./../../server/Routes"),
    public: path.join(__dirname,"./../../public/"),
    private: path.join(__dirname,"./../../PrivateBuild/")
};
let nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });
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
        path: PATHS.private
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
        new WebpackShellPlugin({onBuildStart:['echo "Compiling Server...."'], onBuildEnd:['npm start']})
    ]
};

module.exports = merge(baseConfig, lconfig);