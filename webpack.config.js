const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
	// Update the entry point
	entry: path.join("./public/assets/js/app.js"),
	output: {
		// Set the path and filename for the output bundle (hint: You will need to use "__dirname")
		path: path.join(__dirname + "/public/dist"),
		filename: "bundle.js",
	},
	mode: "development",
	plugins: [
		new WebpackPwaManifest({
			name: "Budget Tracker App",
			short_name: "Budget Tracker App",
			description: "My awesome Progressive Web App!",
			background_color: "#ffffff",
			crossorigin: "null", //can be null, use-credentials or anonymous
			icons: [
				{
					src: path.resolve("./public/icons/icon-192x192.png"),
					sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
				},
			],
		}),
	],
};

module.exports = config;
