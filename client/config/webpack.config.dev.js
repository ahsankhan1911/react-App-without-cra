const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    mode : 'development',
    entry: './src/index.js',
    output: { 
        path: path.resolve(__dirname, 'public') , 
        filename: 'static/js/bundle.js',
    publicPath :'/',
    pathinfo: true,
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
            },

          

        ],

     
    }
}