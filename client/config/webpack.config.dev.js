const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode : 'development',
    entry: './src/index.js',
    output: { path: __dirname , filename: 'static/js/bundle.js',
    // publicPath : '../public'
},
plugins: [
    new HtmlWebpackPlugin({
        title: 'MERN APP',
        hash: true,
        inject : true,
        template: './public/index.html'
    })
],
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