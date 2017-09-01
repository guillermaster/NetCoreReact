const path = require('path');
const webpack = require('webpack');

const paths = {
	outputDit: './wwwroot/dist'
};

const config = {
	entry: {
		// Bundles used on specific pages
		homepage: './Frontend/Homepage/index.tsx',
		// Common libraries
		libs: [
			'bootstrap',
			'bootstrap/dist/css/bootstrap.css',
			'react',
			'react-dom',
			'jquery'
		]
	},
	output: {
		path: path.join(__dirname, paths.outputDir),
		filename: '[name].js',
		publicPath: '/dist/'
	},
	module: {
	},
	plugins: [
	]
};

module.exports = config;
