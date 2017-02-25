let path = require('path');

//noinspection JSUnresolvedVariable
//let TARGET = process.env.npm_lifecycle_event;

const PATHS = {
    app: path.join(__dirname, "../client/Client"),

    public: path.join(__dirname,"../public/")
};
module.exports = {
    entry: PATHS.app,
    output: {
        filename: 'client.js',
        path: PATHS.public
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, //React Hot loader needed
                loader: 'babel-loader'
            }
        ]
    }

};