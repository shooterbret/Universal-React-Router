const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('../modes/webpack.development.config');
const webpack = require('webpack');

const PATHS = {
    app: path.join(__dirname, "./../../client/Client"),

    public: path.join(__dirname, "./../../../public")
};
const lconfig = {
    entry: ['react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        'webpack/hot/only-dev-server',
        path.resolve(PATHS.app)],
    target: 'web',
    output: {
        filename: 'client.js',
        path: path.resolve(PATHS.public),
        publicPath: "http://localhost:3000/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true,
        })
        // do not emit compiled assets that include errors
    ],
};

module.exports = merge(baseConfig, lconfig);