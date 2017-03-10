


module.exports = {
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, //React Hot loader needed
                loader: 'babel-loader'
            },
            {
                test: /\.(jpg|png|mp4)$/,
                loader: 'file-loader'
            },
            {
                test: /\.scss$/,
                loaders: [
                    'isomorphic-style-loader',
                    'css-loader?modules&localIdentName=[name]_[local]',
                    'sass-loader'
                ]
            }
        ]

    },
};