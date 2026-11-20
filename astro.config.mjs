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
				{ label: 'About', slug: 'about' },
				{
					label: 'Governance & Compliance',
					items: [{ autogenerate: { directory: 'governance' } }],
				},
				{
					label: 'Architecture',
					items: [{ autogenerate: { directory: 'architecture' } }],
				},
				{
					label: 'AI FinOps',
					items: [{ autogenerate: { directory: 'finops' } }],
				},
				{
					label: 'Transformation Playbooks',
					items: [{ autogenerate: { directory: 'playbooks' } }],
				},
				{
					label: 'Control Library',
					items: [{ label: 'Control Library', slug: 'reference/control-library' }],
				},
				{
					label: 'India Regulatory Landscape',
					items: [{ autogenerate: { directory: 'india' } }],
				},
				{
					label: 'Writing',
					items: [{ autogenerate: { directory: 'writing' } }],
				},
				{
					label: 'Resources & Templates',
					items: [{ autogenerate: { directory: 'resources' } }],
				},
			],
		}),
	],
});
