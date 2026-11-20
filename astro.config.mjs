// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://anil-ai2.github.io',
	base: '/thought-base/',
	integrations: [
		starlight({
			title: 'Thought Base',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/anil-ai2/thought-base' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
