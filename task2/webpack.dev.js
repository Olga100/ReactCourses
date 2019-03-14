const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');


module.exports = merge(common, {
    mode: 'development',
    devtool: false,
    devServer: {
        host: 'localhost',
        port: 3000,
        hot: true,
        open: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map',
            exclude: ['vendor.js']
        })],
});
