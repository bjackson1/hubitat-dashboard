const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const config = {
	mode: isProduction ? 'production' : 'development',
	entry: path.resolve(__dirname, 'src/index.jsx'),
	devtool: isProduction ? false : 'eval-source-map',
	output: {
		path: path.resolve(__dirname, isProduction ? 'dist' : 'dev'),
		filename: 'index.js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader',
				resolve: { fullySpecified: false },
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.png/,
				type: 'asset/inline',
			},
			{
				test: /version.json/,
				loader: 'string-replace-loader',
				options: {
					search: '0',
					replace: `test-version (${new Date().toISOString().substring(0, 19).replace('T', ' ')})`,
				},
			},
		],
	},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.jsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve('src/index.html'),
			title: 'Home Dashboard',
			cache: false,
		}),
	],
	devServer: {
		port: 3000,
		allowedHosts: 'all',
		historyApiFallback: true,
		devMiddleware: {
			writeToDisk: true,
		},
		static: {
			publicPath: '/apps/api/167/static/index.html',
			directory: path.resolve(__dirname, 'dev')
		}
	},
}

module.exports = config
