const config = require('../config/webpack.config.dev');
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server');


const devServer = new WebpackDevServer(webpack.Compiler, config)


devServer.listen(3000, 'localhost', function (error) {

    if(error) {
        return console.log(error)
    }
    else {
        console.log('App is running on 3000')
    }
})