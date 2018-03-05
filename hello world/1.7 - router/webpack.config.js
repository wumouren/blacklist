const webpack = require('webpack');
const path = require('path');

const config = {
    context:__dirname + '/src',
    entry: './js/index.js',
	output: { // 出口文件路径，__dirname 指向当前项目根路径。
		path: __dirname + '/src/js/',
		filename: 'bundle/index.bundle.js'
	},
	plugins: [
		
	],
	module: {
		rules: [ 
			{
				test: /\.js$/,
		        loader: 'babel-loader',
		        exclude: /node_modules/,
		        query:{
		        	presets: ['react','es2015']
		        }
			},
			{
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }
		]
	},
}
module.exports = config;