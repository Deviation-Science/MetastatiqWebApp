const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				cream: "#796F6D",
				creamLogo: "#F3D6CC",
				asphalt: "#433E3F",
				lightPink: "#6D4B5A",
				darkPink: "#603351",
				blackNew: "#090E10",
				...colors,
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				alice: ["var(--font-alice)", ...fontFamily.sans],
				playfair: ["var(--font-playfair)", ...fontFamily.sans],
			},
		},
	},
	plugins: [],
};
export default config;
