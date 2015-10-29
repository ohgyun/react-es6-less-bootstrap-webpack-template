const path = require('path');

module.exports = {
    entry: {
        'main': './src/scripts/main.js'
    },
    output: {
        path: './build',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.less$/,
            include: path.join(__dirname, './src/styles'),
            loader: 'style!css!less'
        }, {
            test: /\.js?$/,
            include: path.join(__dirname, './src/scripts'),
            loader: 'babel'
        }]
    }
};