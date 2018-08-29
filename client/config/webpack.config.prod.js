const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack')
const fs = require('fs')
const WriteFilePlugin = require('write-file-webpack-plugin');


const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: resolveApp('build'), filename: 'static/js/main.js',
        publicPath : './public'
    },
    
    module: {

        rules: [

            {
                test: /\.(js|jsx|mjs)$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                           
                            eslintPath: require.resolve('eslint'),

                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
                include:  resolveApp ('src'),
            },
            {

                oneOf: [

                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: 'static/images/[name].[hash:8].[ext]',
                        },
                    },
                    // Process JS with Babel.
                    {
                        test: /\.(js|jsx|mjs)$/,
                        include: resolveApp('src'),
                        loader: require.resolve('babel-loader'),
                        options: {

                            compact: true,
                        },
                    },

                    {
                        test: /\.css$/,
                        loader: ExtractTextPlugin.extract(
                            Object.assign(
                                {
                                    fallback: {
                                        loader: require.resolve('style-loader'),
                                        options: {
                                            hmr: false,
                                        },
                                    },
                                    use: [
                                        {
                                            loader: require.resolve('css-loader'),
                                            options: {
                                                importLoaders: 1,
                                                minimize: true,
                                                sourceMap: true,
                                            },
                                        },
                                        {
                                            loader: require.resolve('postcss-loader'),
                                            options: {

                                                ident: 'postcss',
                                                plugins: () => [
                                                    require('postcss-flexbugs-fixes'),
                                                    autoprefixer({
                                                        browsers: [
                                                            '>1%',
                                                            'last 4 versions',
                                                            'Firefox ESR',
                                                            'not ie < 9', // React doesn't support IE8 anyway
                                                        ],
                                                        flexbox: 'no-2009',
                                                    }),
                                                ],
                                            },
                                        },
                                    ],
                                }
                            )
                        ),

                    },

                    {
                        loader: require.resolve('file-loader'),

                        exclude: [/\.js$/, /\.html$/, /\.json$/],
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },

                ],
            },
        ],

    }
    ,
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: './public/index.html'
        }),

        new WriteFilePlugin(),

        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //       warnings: false,
      
        //       comparisons: false,
        //     },
        //     mangle: {
        //       safari10: true,
        //     },
        //     output: {
        //       comments: false,
        //       ascii_only: true,
        //     },
        //     sourceMap: true,
        //   }),

        //   new ExtractTextPlugin({
        //     filename: 'static/css/style.css',
        //   }),
    ],

    
}