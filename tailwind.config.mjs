import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens,
		fontSize,
		extend: {
			colors: {
				// USING MODERN `RGB`
				accent: 'rgb(var(--color-accent) / <alpha-value>)',
				light: 'rgb(var(--color-light) / <alpha-value>)',
				dark: 'rgb(var(--color-dark) / <alpha-value>)',
				// USING LEGACY `RGBA`
				accent: 'rgba(var(--color-accent), <alpha-value>)',
				light: 'rgba(var(--color-light), <alpha-value>)',
				dark: 'rgba(var(--color-dark), <alpha-value>)'
			}
			//
		}
	},
	plugins: [fluid]
}
