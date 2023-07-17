/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				dots: "url('/Dot.svg')"
			}
		}
	},
	plugins: []
};
