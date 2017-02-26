


module.exports = {
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, //React Hot loader needed
                loader: 'babel-loader'
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader'
            },
        ]

    },
};