/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				concert: 'ConcertOne',
				lato: ['Lato', 'sans-serif']
			}
		}
	},
	plugins: []
}
