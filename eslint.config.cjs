const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
});

module.exports = [
	...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended"),
	{
		ignores: ["dist/**", "build/**", "node_modules/**"],
		languageOptions: {
			parser: require("@typescript-eslint/parser"),
			parserOptions: {
				ecmaVersion: 2019,
				sourceType: "module",
			},
		},
		rules: {
			"no-console": "off",
		},
	},
];
