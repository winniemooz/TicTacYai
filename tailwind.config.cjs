/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors:{
				'mongoose': {
					'50': '#f9f6f3',
					'100': '#f2ece2',
					'200': '#e3d7c5',
					'300': '#d1bda0',
					'400': '#c0a07d',
					'500': '#b1865e',
					'600': '#a37453',
					'700': '#885e46',
					'800': '#6f4e3d',
					'900': '#5a4134',
					'950': '#30211a',
				},				
			},
			fontFamily: {
				kanit: ["Kanit", "sans-serif"],
				fredoka: ["Fredoka", "sans-serif"],
				copyduck: ["Copyduck"]
			}
		},
	},

	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				".no-scrollbar::-webkit-scrollbar": {
					display: "none",
				},
				".no-scrollbar": {
					"-ms-overflow-style": "none",
					"scrollbar-width": "none",
				},
			};
			addUtilities(newUtilities);
		},
	]
};

module.exports = config;
