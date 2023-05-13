import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { configDefaults } from 'vitest/config';

/** @type {import('vite').UserConfig} */
const config: UserConfig = {
	plugins: [sveltekit()],
	test: {
		globals: true,
		environment: 'jsdom',
		exclude: [...configDefaults.exclude, '**/package/**', '**/build/**']
	}
};

export default config;
