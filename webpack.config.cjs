const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
	mode: "production",
	entry: "./src/index.ts",
	plugins: [new CompressionPlugin({ exclude: /\/docs/ })],
	module: {
		rules: [
			{
				test: /\.tsx?/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		modules: ["node_modules"],
		extensions: [".ts", ".js"],
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
	},
};
