/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar'

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "15px",
	},
	screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	},
	fontFamily: {
		primary: "var(--font-jetbrainsMono)",
	},
  	extend: {
  		colors: {
			primary: "#1c1c22",
  			// primary: "#222129",
			//   accent: {
			// 	DEFAULT: "#00ff99",
			// 	hover: "#00e187",
			// },
			accent: {
				DEFAULT: "#8ecae6",
				hover: "#a4161a",
			},
			white: "#edede9",
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		scale: {
			'101': '1.01',
		}
  	}
  },
  plugins: [require("tailwindcss-animate"), tailwindScrollbar],
};
