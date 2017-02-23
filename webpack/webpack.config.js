let path = require('path');
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
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    }

};