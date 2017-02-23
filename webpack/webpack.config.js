let path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
let Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin')
let webpack_isomorphic_tools_plugin =
    // webpack-isomorphic-tools settings reside in a separate .js file
    // (because they will be used in the web server code too).
    new Webpack_isomorphic_tools_plugin(require('./webpack-isomorphic-tools-configuration'))
    // also enter development mode since it's a development webpack configuration
    // (see below for explanation)
        .development();

const PATHS = {
    app: path.join(__dirname, "../client/Client"),

    public: path.join(__dirname,"../public/")
};
module.exports = {
    entry: PATHS.app,
    context: "../",
    output: {
        filename: 'client.js',
        path: PATHS.public
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|public)/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components|public)/,
                use:ExtractTextPlugin.extract({
                    loader:[
                           "css-loader",
                          "sass-loader"
                ]})
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        webpack_isomorphic_tools_plugin
    ]

};