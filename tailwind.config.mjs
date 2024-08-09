/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		fontSize: {
			"4xl": [
				"11.391rem",
				"12rem"
			],
			"3xl": [
				"7.594rem",
				"8rem"
			],
			"2xl": [
				"5.063rem",
				"6rem"
			],
			"xl": [
				"3.375rem",
				"4rem"
			],
			"lg": [
				"2.25rem",
				"3rem"
			],
			"md": [
				"1.5rem",
				"2rem"
			],
			"base": [
				"1rem",
				"2rem"
			],
			"sm": [
				"0.667rem",
				"1rem"
			],
			"xs": [
				"0.444rem",
				"1rem"
			]
			},
			spacing: {
				"quarter": "0.25rem",
				"half": "0.5rem",
				"one": "1rem",
				"two": "2rem",
				"three": "3rem",
				"four": "4rem",
				"five": "5rem",
				"six": "6rem",
				"eight": "8rem",
				"twelve": "12rem",
				"sixteen": "16rem"
			}
		},			
	},
	plugins: [],
}
