const path = require("path");

module.exports = {
	mode: "development",
	entry: "./lib/index.js",
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
