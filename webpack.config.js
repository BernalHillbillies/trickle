const webpack = require('webpack')
const path = require('path')

const config = {
	entry: [
		path.join(__dirname, '/frontend/root.js')
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
			}
		]
	},
	plugins: []
}

module.exports = config
