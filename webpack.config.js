var path = require('path');
var webpack = require('webpack');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = PRODUCTION
	?	['./src/index.js']
	:	[
			'./src/index.js',
			'webpack/hot/dev-server',
			'webpack-dev-server/client?http://localhost:8080'
		];

const plugins = PRODUCTION
	? 	[
			// new webpack.optimize.UglifyJsPlugin(),
			// new ExtractTextPlugin('style-[contenthash:10].css'),
			// new HTMLWebpackPlugin({
			// 	template: 'index-template.html'
			// })
		]
	: 	[
			new webpack.HotModuleReplacementPlugin()
		];

  module.exports = {
    devtool: 'source-map',
    entry: entry,
    plugins: plugins,
    module: {
      loaders: [{
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: '/node_modules/'
      }]
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/dist',
      filename: 'bundle.js'
    }
  }
