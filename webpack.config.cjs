const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = [
	{
		mode: "development",
		plugins: [
			new CopyWebpackPlugin({
				patterns: [{ from: "static" }],
			}),
		],
		output: {
			path: path.resolve(__dirname, "./dist"),
		},
	},
	{
		mode: "development",
		entry: "./src/index.ts",
		module: {
			rules: [
				{
					test: /\.ts$/,
					use: "ts-loader",
				},
			],
		},
		resolve: {
			extensionAlias: {
				".js": [".ts", ".js"],
			},
			modules: ["node_modules"],
			extensions: [".ts", ".js", ".json"],
		},
		output: {
			filename: "[name].js",
			path: path.resolve(__dirname, "./dist/src"),
		},
	},
];
