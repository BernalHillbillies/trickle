const webpack = require('webpack')
const path = require('path')

const config = {
	entry: [
		path.join(__dirname, '/app/index.js')
	],
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel']
			},
			{
				test: /\.html$/,
				loaders: ['html']
			},
			{
				test: /\.json$/,
				loaders: ['json']
			},
			{
			  test: /\.svg$/,
			  loader: 'babel!svg-react'
			}
		]
	},
	postcss: function() {
		return [
			require('autoprefixer')
		]
	},
	plugins: []
}

module.exports = config
