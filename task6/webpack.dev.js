const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        host: 'localhost',
        port: 3000,
        hot: true,
        open: true,
        historyApiFallback: true,
        index: 'index.html'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});
