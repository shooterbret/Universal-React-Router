let path = require('path');

//noinspection JSUnresolvedVariable
//let TARGET = process.env.npm_lifecycle_event;

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
                exclude: /(node_modules|bower_components)/, //React Hot loader needed
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