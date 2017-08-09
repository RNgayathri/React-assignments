require('es6-promise').polyfill();

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry  : [
		'whatwg-fetch',
		'./src/index.js'
	],
	output : {
		path         : __dirname + '/__build__',
		filename     : '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].chunk.js',
		publicPath   : '/'
	},

	module: {
		loaders: [
			{
				test  : /\.(ttf|eot|otf|svg|png|gif|woff|jpeg(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader'
			},
			{
				test   : /\.css$/,
				exclude: [/global.css/, /flaticon.css/, /website.css/],
				loader : 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
			},
			{
				test  : [/global.css/, /flaticon.css/, /website.css/],
				loader: 'style!css-loader!postcss-loader'
			},
			{
				test   : /\.js/,
				exclude: /node_modules/,
				loader : 'babel-loader',
				query  : {
					presets: ['es2015', 'react', 'stage-0'],
					plugins: ["transform-decorators-legacy"]
				}
			},
			{
				test  : /vendor\/.+\.(jsx|js)$/,
				loader: 'imports?jQuery=jquery,$=jquery,this=>window'
			}
		],
		include: path.join(__dirname, 'src')
	},

	plugins: [
		new webpack.ProvidePlugin({
			$              : "jquery",
			jQuery         : "jquery",
			"window.jQuery": "jquery"
		}),
		new webpack.optimize.CommonsChunkPlugin('common.[chunkhash].js'),
		new webpack.optimize.OccurenceOrderPlugin(),
		//new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {warnings: false},
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
		}),
		new HtmlWebpackPlugin({
			template: 'index.html',
			minify  : {
				removeComments               : true,
				collapseWhitespace           : true,
				removeRedundantAttributes    : true,
				useShortDoctype              : true,
				removeEmptyAttributes        : true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash             : true,
				minifyJS                     : true,
				minifyCSS                    : true,
				minifyURLs                   : true
			},
			inject  : true
		})
	]
};