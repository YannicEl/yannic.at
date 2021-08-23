import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';
import WindiCSS from 'vite-plugin-windicss';
import ViteFonts from 'vite-plugin-fonts';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		ViteComponents(),
		WindiCSS(),
		ViteFonts({
			google: {
				families: [
					{
						name: 'Montserrat',
						styles: 'wght@300;700',
					},
				],
			},
		}),
	],
});
