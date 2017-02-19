const path = require('path');
//const merge = require('webpack-merge');
const PATHS = {
    app: path.join(__dirname, "../universal/ReactRouter"),

    public: path.join(__dirname,"../public/")
};
const common = {
entry:{
    app: PATHS.app
},
    output:{
    path: PATHS.public,
        filename: 'bundle.js'
    }
};