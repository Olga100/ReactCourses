const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production'
})



/*"dev": "webpack --mode development ./src/index.js --output ./dist/main.js",
 "build": "webpack --mode production ./src/index.js --output ./dist/main.js",
 "start": "webpack-dev-server --open --mode development",


 "build": "webpack --config webpack.prod.js",
 "start": "webpack-dev-server --open --config webpack.dev.js",
 */
