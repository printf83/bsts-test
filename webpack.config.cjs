const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./lib/index.js",
	plugins: [new CompressionPlugin({ exclude: /\/docs/ })],
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: [
					{
						loader: "ts-loader",
						options: {
							transpileOnly: true,
						},
					},
				],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
	},
};