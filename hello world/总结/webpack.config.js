const config = {
    context:__dirname + '/src',
    entry: './index.js',
	output: { // 出口文件路径，__dirname 指向当前项目根路径。
		path: __dirname + '/src/',
		filename: 'bundle/index.bundle.js'
	},
	plugins: [
		
	],
	module: {
        rules: [ 
			{
				test: /\.js$/,
		        loader: 'babel-loader',
		        exclude: /node_mowebpack dules/,
		        query:{
		        	presets: ['react','es2015']
		        }
            }
        ]    
    },
}
module.exports = config;