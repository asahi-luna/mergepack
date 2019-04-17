const path = require('path');
// const webpack = require('webpack');
// const DropConsoleWebpackPlugin = require('drop-console-webpack-plugin');

module.exports = {
	mode: 'production',  //development
	entry: {
		index: './babel/index.js',
		rule: './babel/rule.js',
		// myfunction: './babel/myfunction.js',
		// withRule: './babel/withRule.js'
	},
	// entry: () => './bable',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'webpack')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},
	plugins: [
		//npm install drop-console-webpack-plugin  --save
		// new DropConsoleWebpackPlugin({drop_log: true })    //限制生产环境//process.env.NODE_ENV === "production"
		// new DropConsoleWebpackPlugin()   不做环境限制,  

		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false,
		// 		drop_debugger: true,
		// 		drop_console: true
		// 	}
		// })
	],
	optimization: {
		minimize: true
	}
};