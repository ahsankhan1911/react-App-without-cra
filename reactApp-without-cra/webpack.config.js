const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: { path:__dirname, filename: 'bundle.js',
    publicPath : './public/'
},
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // include .jsx files
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: "babel-loader",
            },
            {
              test: /\.css$/,
              use: ["style-loader", "css-loader"]
            }

        ],

     
    }
}