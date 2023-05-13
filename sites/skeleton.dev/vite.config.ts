import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import sveld from 'vite-plugin-sveld';

const config: UserConfig = {
	plugins: [sveltekit(), sveld()]
};

export default config;
