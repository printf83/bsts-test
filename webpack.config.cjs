const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.ts",
	optimization: {
		usedExports: true,
	},
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
		path: path.resolve(__dirname, "dist"),
	},
};
