const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./build/index.js",
	plugins: [new CompressionPlugin({ exclude: "./build/docs/*" })],
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.tsx?/,
	// 			use: "ts-loader",
	// 			exclude: /node_modules/,
	// 		},
	// 	],
	// },
	resolve: {
		modules: ["node_modules"],
		// extensions: [".ts", ".js", ".json"],
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
	},
};
