import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl'

const config: UserConfig = {
	server: {
		https: true
	},
	plugins: [basicSsl(), sveltekit()],
	define: {
		'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
	},
};

export default config;
