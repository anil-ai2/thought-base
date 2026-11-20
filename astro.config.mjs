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
					items: [
						{ label: 'Overview', slug: 'governance' },
						{ autogenerate: { directory: 'governance' } },
					],
				},
				{
					label: 'Architecture',
					items: [
						{ label: 'Overview', slug: 'architecture' },
						{ autogenerate: { directory: 'architecture' } },
					],
				},
				{
					label: 'AI FinOps',
					items: [
						{ label: 'Overview', slug: 'finops' },
						{ autogenerate: { directory: 'finops' } },
					],
				},
				{
					label: 'Transformation Playbooks',
					items: [
						{ label: 'Overview', slug: 'playbooks' },
						{ autogenerate: { directory: 'playbooks' } },
					],
				},
				{
					label: 'Control Library',
					items: [{ label: 'Control Library', slug: 'reference/control-library' }],
				},
				{
					label: 'India Regulatory Landscape',
					items: [
						{ label: 'Overview', slug: 'india' },
						{ autogenerate: { directory: 'india' } },
					],
				},
				{
					label: 'Writing',
					items: [
						{ label: 'Overview', slug: 'writing' },
						{ autogenerate: { directory: 'writing' } },
					],
				},
				{
					label: 'Resources & Templates',
					items: [
						{ label: 'Overview', slug: 'resources' },
						{ autogenerate: { directory: 'resources' } },
					],
				},
			],
		}),
	],
});
