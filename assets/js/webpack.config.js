// add path module
const path = require("path");

// for basic configuration - provide webpack with 
// three properties: entry, output, and mode

module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
mode: 'development'

};