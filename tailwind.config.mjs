/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
			  'background-shine': 'background-shine 2s linear infinite',
			},
			keyframes: {
			  'background-shine': {
				  from: {
					  backgroundPosition: '0 0',
				  },
				  to: {
					  backgroundPosition: '-200% 0',
				  },
			  },
			},
			colors: {
			  primary: "#030712",
			  black: {
				DEFAULT: "#000",
				100: "#1E1E2D",
				200: "#232533",
			  },
			  gray: {
				100: "#CDCDE0",
			  },
			  textyellow: "#fef08a",
			},
			fontFamily: {
			  pthin: ["Poppins-Thin", "sans-serif"],
			  pextralight: ["Poppins-ExtraLight", "sans-serif"],
			  plight: ["Poppins-Light", "sans-serif"],
			  pregular: ["Poppins-Regular", "sans-serif"],
			  pmedium: ["Poppins-Medium", "sans-serif"],
			  psemibold: ["Poppins-SemiBold", "sans-serif"],
			  pbold: ["Poppins-Bold", "sans-serif"],
			  pextrabold: ["Poppins-ExtraBold", "sans-serif"],
			  pblack: ["Poppins-Black", "sans-serif"],
			  onest: ["Onest", "sans-serif"],
			},
		  },
	},
	plugins: [],
}
