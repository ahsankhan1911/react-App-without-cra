const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: { path: path.join (__dirname + '/public') , filename: 'bundle.js',
    publicPath : 'public'
},
plugins: [
    new HtmlWebpackPlugin({
        title: 'MERN APP',
        hash: true,
        template: path.resolve('public/index.html')
    })
],
// devServer: {
//     contentBase: path.join(__dirname, 'public'),
//     compress: true,
//     port: 3000,
//     stats : "errors-only",
//     open: true,
//     proxy: {
//         '/api': 'http://localhost:5000'
//       }
//   },
 
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