let merge = require('webpack-merge');
let path = require('path');
let baseConfig = require('../modes/webpack.development.config');
//let webpack = require('webpack');
const PATHS = {
    app: path.join(__dirname, "./../../client/Client"),

    public: path.join(__dirname,"./../../../public")
};
const lconfig = {
    entry: path.resolve(PATHS.app),
    target: 'web',
    output: {
        filename: 'client.js',
        path: path.resolve(PATHS.public)
    }
};

module.exports = merge(baseConfig, lconfig);