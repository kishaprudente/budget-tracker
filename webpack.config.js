const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
	// Update the entry point
	entry: path.join(__dirname + "/public/index.js"),
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
			filename: "manifest.webmanifest",
			description: "My awesome Progressive Web App!",
			background_color: "#ffffff",
			display: "standalone",
			start_url: "/",
			fingerprints: false,
			icons: [
				{
					src: path.resolve("./public/assets/icons/icon-192x192.png"),
					sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
				},
			],
		}),
	],
};

module.exports = config;
