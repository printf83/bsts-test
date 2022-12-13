const path = require("path");

const fn = (name, input, output, mode) => {
	return {
		mode: mode,
		entry: path.resolve(__dirname, input),
		output: {
			path: path.resolve(__dirname, output),
			chunkFilename: name + ".[name].bundle.js",
			filename: name + ".bundle.js",
		},
		cache: false,
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: ["style-loader", "css-loader"],
				},
			],
		},
		resolve: {
			modules: [path.resolve(__dirname, "./node_modules")],
			extensions: [".ts", ".css", ".js"],
		},
	};
};

module.exports = [fn("index", "./src/index.js", "./dist", "development")];
