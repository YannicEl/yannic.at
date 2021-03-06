import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
	darkMode: 'class',
	theme: {
		container: {
			center: true,
		},
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
		},
	},
});
