const config = require('../config/webpack.config.prod');
const fs = require('fs')
const fsExtra = require('fs-extra')
const webpack = require('webpack')

process.on('unhandledRejection', err => {
    throw err;
});

// Makes the script crash on unhandled rejections instead of silently
// ignoring them.

function makeBuild() {
    console.log("Production build in process....")

    let compiler = webpack(config)
    return new Promise((resolve, reject) => {

        compiler.run((err, stats) => {

            if (err) {
                return reject(err)
            }

            else {
                resolve(stats)
            }
        })



    })
}


makeBuild().then((result) => {
    console.log(result)

    copyFiles()

})



function copyFiles() {
    fsExtra.emptyDirSync('./build');
    fsExtra.copy('./public', './build', { dereference: true,
    filter: file => file !== './src/index.html'}).then((result) => {

                    console.log("Production build completed !")
                })
}
