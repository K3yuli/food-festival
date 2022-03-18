// add path module
const path = require("path");
// 
const webpack = require("webpack");

// for basic configuration - provide webpack with 
// three properties: entry, output, and mode

module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    // use plugin to tell webpack to use jQuery package
    plugins: [
            new webpack.ProvidePlugin({
              $: "jquery",
              jQuery: "jquery"
            }),
    ],

mode: 'development'

};