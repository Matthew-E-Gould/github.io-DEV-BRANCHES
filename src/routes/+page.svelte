<!-- App.svelte -->
<script>
	import { onMount } from 'svelte';
	import Header from './header.svelte';
	import Hero from './hero.svelte';
	import Section from './section.svelte';
	import SkillGrid from './skillGrid.svelte';
	import ProjectCard from './projectCard.svelte';
	import MatrixBackground from './matrixBackground.svelte';
	import GlitchText from './glitchText.svelte';

	// CV Data
	const personalInfo = {
		name: 'Matthew Gould',
		title: 'Full Stack & Indie Games Developer',
		email: 'matthew@mgould.net',
		location: 'Online',
		tagline: 'Masters Grad of Computer Science & Techno Anarchist'
	};

	const skills = [
		{
			name: 'Front End',
			langs: [
				'Svelte (js)',
				'Vue (js)',
				'Vanilla HTML',
				'Vanilla Javascript',
				'React (js)',
				'Angular (js)'
			]
		},
		{ name: 'Back End', langs: ['node.js', 'Laravel (PHP)', 'ionic (js)'] },
		{ name: 'Games Dev', langs: ['C#', 'Godot', 'gdscript'] },
		{ name: 'Databases', langs: ['MySQL', 'noSQL', 'mongoDB'] },
		{ name: 'Scripting', langs: ['Python', 'C++', 'Rust', 'batch'] },
		{ name: 'Hosting', langs: ['DNS', 'AWS', 'Plesk', 'Serverless'] }
	];

	const experience = [
		{
			title: 'Lead Developer',
			company: '[REDACTED]',
			period: '03/2025 - Present',
			description: 'Working with an amazing team on some very interesting products'
		},
		{
			title: 'Indie Games Developer',
			company: 'Self Development',
			period: '01/2024 - 03/2025',
			description: "Worked on a variety of game ideas that I've accrued over the years I've lived -> check out my projects"
		},
		{
			title: 'Lead Developer',
			company: 'Haelu (Startup)',
			period: '07/2022 - 11/2023',
			description: 'Lead the development of a new mobile-first support and monitoring platform for post-hospital recuperation of patients'
		},
		{
			title: 'Lead Developer (Co-Founder)',
			company: 'RECOVAR (Startup)',
			period: '04/2021 - 06/2022',
			description: 'Asset recovery platform that utilised a powerful offline mobile app to sync data gathered from remote locations'
		},
		{
			title: 'Lead Developer (Co-Founder)',
			company: 'Finative (Startup)',
			period: '11/2019 - 01/2021',
			description: 'Platform to assist small to medium enterpises to secure loands and grants during the pandemic'
		},
		{
			title: 'Freelance Developer',
			company: 'Multiple Companies',
			period: '2012 - 2024',
			description: 'Worked with a variety of startups to assist in the development of sites and to test applications'
		},
	];

	const projects = [
		{
			title: 'Neural Network Dashboard',
			description: 'Real-time AI monitoring system with cyberpunk aesthetics',
			tech: ['Svelte', 'D3.js', 'WebSockets'],
			image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop',
			link: 'https://github.com/mgould/neural-dash'
		},
		{
			title: 'Quantum Commerce Platform',
			description: 'Next-gen e-commerce with holographic product displays',
			tech: ['React', 'Three.js', 'Stripe'],
			image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=250&fit=crop',
			link: 'https://github.com/mgould/quantum-commerce'
		},
		{
			title: 'Matrix Code Generator',
			description: 'Procedural matrix rain effect with customizable parameters',
			tech: ['Vanilla JS', 'Canvas', 'WebGL'],
			image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop',
			link: 'https://github.com/mgould/matrix-gen'
		}
	];

	let activeSection = 'about';

	onMount(() => {
		// Periodic glitch effect
		setInterval(() => {
			glitchActive = true;
			setTimeout(() => (glitchActive = false), 200);
		}, 8000);
	});

	function scrollToSection(sectionId) {
		activeSection = sectionId;
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<svelte:head>
	<title>Matthew Gould - CV Site</title>
</svelte:head>

<main class="min-h-screen overflow-x-hidden bg-black font-mono text-cyan-400">
	<MatrixBackground />
	<div class="relative z-10">

		<Header {scrollToSection} {activeSection} />

		<Section id="root" title="" {activeSection}>
			<Hero {personalInfo} />
		</Section>

		<Section id="about" title="About.json" {activeSection}>
			<div class="grid gap-8 md:grid-cols-2">
				<div class="space-y-4">
					<p class="leading-relaxed text-gray-300">
						Welcome to my net! I'm a computer science masters grad with a vast knowlage of all
						things computer under my belt! I have an apetite for risk and challenge that has given
						me some amazing experiences & lessons.
					</p>
					<p class="leading-relaxed text-gray-300">
						My vast experience has given me the confidence to tackle many challenges, from
						web-development and games dev to network infrastructure and monitoring.
					</p>
				</div>
				<div class="bg-opacity-50 rounded border border-cyan-500 bg-gray-900 p-6">
					<h3 class="mb-4 font-bold text-pink-400">System.Stats</h3>
					<div class="space-y-2 text-sm">
						<div class="flex justify-between">
							<span>Operating Systems:</span>
							<span class="text-pink-400">Linux & Windows</span>
						</div>
						<div class="flex justify-between">
							<span>Graduated:</span>
							<span class="text-pink-400">2019</span>
						</div>
						<div class="flex justify-between">
							<span>First start programming:</span>
							<span class="text-pink-400">2013</span>
						</div>
						<div class="flex justify-between">
							<span>Commits:</span>
							<span class="text-pink-400">Over 4000</span>
						</div>
						<div class="flex justify-between">
							<span>Lines of Code:</span>
							<span class="text-pink-400">I've lost count</span>
						</div>
					</div>
				</div>
			</div>
		</Section>

		<Section id="skills" title="Skills.dll" {activeSection}>
			<SkillGrid {skills} />
		</Section>

		<Section id="experience" title="Experience.log" {activeSection}>
			<div class="space-y-6">
				{#each experience as job}
					<div
						class="bg-opacity-50 rounded border border-cyan-500 bg-gray-900 p-6 transition-colors hover:border-pink-400"
					>
						<div class="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
							<h3 class="text-xl font-bold text-pink-400">{job.title}</h3>
							<span class="text-sm text-cyan-400">{job.period}</span>
						</div>
						<p class="mb-2 text-gray-300">{job.company}</p>
						<p class="text-gray-400">{job.description}</p>
					</div>
				{/each}
			</div>
		</Section>

		<Section id="projects" title="Projects.zip" {activeSection}>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each projects as project}
					<ProjectCard {project} />
				{/each}
			</div>
		</Section>

		<Section id="hobbies" title="Hobbies.exe" {activeSection}>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each projects as project}
					<ProjectCard {project} />
				{/each}
			</div>
		</Section>

	</div>
</main>

<style>
	:global(body) {
		background: #000;
		overflow-x: hidden;
	}

	:global(::selection) {
		background: rgba(255, 20, 147, 0.3);
	}

	:global(::-webkit-scrollbar) {
		width: 8px;
	}

	:global(::-webkit-scrollbar-track) {
		background: #111;
	}

	:global(::-webkit-scrollbar-thumb) {
		background: linear-gradient(45deg, #ff1493, #00ffff);
		border-radius: 4px;
	}
</style>
