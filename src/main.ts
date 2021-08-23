import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import Home from './components/Home.vue';
import 'virtual:windi.css';
import './style.scss';

const routes = [
	{
		path: '/',
		component: Home,
	},
];

export const createApp = ViteSSG(
	App,
	{ routes },
	async ({ app, router, routes, isClient, initialState }) => {}
);
