<!-- App.svelte -->
<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Header from '../lib/components/header.svelte';
	import Hero from '../lib/components/hero.svelte';
	import Section from '../lib/components/section.svelte';
	import About from '../lib/components/about.svelte';
	import FullWidthCardList from '../lib/components/fullWidthCardList.svelte';
	import SkillGrid from '../lib/components/skillGrid.svelte';
	import ProjectCard from '../lib/components/projectCard.svelte';
	import MatrixBackground from '../lib/components/matrixBackground.svelte';
	import EE from '../lib/components/ee.svelte';
	import { assets } from '$app/paths';

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
				'Svelte (JS)',
				'Vue (JS)',
				'Vanilla HTML',
				'Vanilla Javascript',
				'React (JS)',
				'Angular (JS)'
			]
		},
		{
			name: 'Back End',
			langs: ['node.js', 'Laravel (PHP)', 'ionic (JS)']
		},
		{
			name: 'Games Dev',
			langs: ['C#', 'Godot', 'gdscript', 'blender']
		},
		{
			name: 'Databases & Data Storage',
			langs: ['MySQL', 'noSQL', 'JSON', 'mongoDB']
		},
		{
			name: 'Scripting',
			langs: ['Python', 'C#', 'C++', 'Rust', 'batch & bash']
		},
		{
			name: 'Hosting',
			langs: ['DNS', 'aaPanel', 'AWS', 'Plesk', 'Serverless']
		}
	];

	const experience = [
		{
			title: 'Lead Developer',
			company: '[REDACTED]',
			period: '03/2025 - Present',
			description: 'Working with an amazing team on some very interesting products',
			details: 'Developed 5 new products,\nMaking web and mobile software for legacy & new hardware,\nDeveloped automated imaging process for production,\nDeveloped workflows & software that work across multiple operating systems,\nAssisting customers with technical support,\nLiaise with partner companies in different timezones to develop new products,\nArchitected a fully self hosted site and database,',
		},
		{
			title: 'Indie Games Developer',
			company: 'Self Development',
			period: '01/2024 - 03/2025',
			description: "Worked on a variety of game ideas that I've accrued over the years I've lived -> check out my projects",
			details: "Proof of concept 2D grapple-hook platformer in C#,\nProof of concept 2D side-scrolling shooter in C#,\nProof of concept 3D momentum-based platformer in C#,\nDeveloped a demo for a 2D tower defence game in C#,\nDeveloped a basic Text-based rpg in Rust,",
		},
		{
			title: 'Lead Developer',
			company: 'Haelu (Startup)',
			period: '07/2022 - 11/2023',
			description: 'Lead the development of a new mobile-first support and monitoring platform for post-hospital recuperation of patients',
			details: 'Architected underlying automated systems,\nArchitected database to existing standard\nTrained 1 team member,\nDeveloped website full-stack,',
		},
		{
			title: 'Lead Developer (Co-Founder)',
			company: 'RECOVAR (Startup)',
			period: '04/2021 - 06/2022',
			description: 'Asset recovery platform that utilised a powerful offline mobile app to sync data gathered from remote locations',
			details: 'Architected database to meet needs of users,\nDeveloped the back-end of the site to work with the front end design,\nDeveloped system to handle long process jobs and notify users when they were done,\nDeveloped a mobile application that would pull information from the database to be use either online or offline at a later point,\nBuilt a sync system so that the user could upload offline data when they had a network connection,',
		},
		{
			title: 'Lead Developer (Co-Founder)',
			company: 'Finative (Startup)',
			period: '11/2019 - 01/2021',
			description: 'Platform to assist small to medium enterpises to secure loans and grants during the pandemic',
			details: 'Architected database to meet needs of users,\nDeveloped a dashboard that would give users different views based off what they wanted to do & their remaining tasks,\nDeveloped a widget that could be easily integrated onto any site to increase use of platform,',
		},
		{
			title: 'Freelance Developer',
			company: 'Multiple (8) Companies',
			period: '2012 - 2024',
			description: 'Worked with a variety of startups to assist in the development of sites and to test applications',
			details: 'Beta tested mobile and ipad applications,\nBeta tested web applications,\nGave user-flow feedback to websites,\nDeveloped autonomous processes for websites,\nDeveloped on-boarding system for websites,\nDeveloped dashboard for websites,'
		},
	];

	const projects = [
		{
			title: 'ballXpit evolution',
			subTitle: 'Companion tool for a indie game',
			description: "My friends and I were looking for a good guide for the game ballXpit, we couldn't, so we made our own interactive one, instead",
			tech: ['svelte', 'web-scraping'],
			// image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop',
			codeLink: 'https://ballxpit-evolution.github.io/',
			linkAltText: "View Site",
		},
		{
			title: 'MyCrypting',
			subTitle: 'Personal short-term project during 2022',
			description: 'Cryptocurrency valuation and tracking tool populated from user exported data from coinbase',
			tech: ['Vue.js', 'CSV reading', 'Apache Echarts'],
			// image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop',
			codeLink: 'https://github.com/Matthew-E-Gould/MyCrypting'
		},
		{
			title: 'Web Spider',
			subTitle: 'Short-term project during 2022',
			description: 'Dark-net and Clear-net web spider that searched for sites with desired keywords',
			tech: ['Python', 'NoSQL'],
			// image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=250&fit=crop',
			codeLink: 'https://github.com/Matthew-E-Gould/Keyword_based_webcrawler'
		},
		{
			title: 'Dice Game Skeleton',
			subTitle: 'On and off 2019 - 2020 project',
			description: 'A skeleton of a game that utilised polymorphism to roll dice that had different properties',
			tech: ['C#'],
			// image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop',
			// link: 'https://github.com/mgould/matrix-gen'
		},
		{
			title: 'Smart House Alarm',
			subTitle: '2018 - 2019 masters dissertation',
			description: 'A system that could detect homeowners through multiple biometrics and raise an alarm if an intruder was detected',
			tech: ['Python'],
			// image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop',
			// link: 'https://github.com/mgould/matrix-gen'
		},
		{
			title: 'Minesweeper Remake',
			subTitle: '2018 summer project',
			description: 'A recreation of the classic game in python with the intent for multiplayer sessions',
			tech: ['Python'],
			// image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop',
			codeLink: 'https://github.com/Matthew-E-Gould/MultiSweeper'
		}
	];

	const hobbies = [
		{
			title: 'Software Development',
			subTitle: "You won't work a day in your life if you enjoy your work",
			// description: '',
			// tech: ['',],
			// image: '',
			// link: ''
		},
		{
			title: 'Video Gaming',
			subTitle: "How can I hope to make a good game if I don't play them?",
		},
		{
			title: 'Motorbiking',
			subTitle: "Engaging my prescience and focus",
		},
		{
			title: 'Astronomy',
			subTitle: "Humbling myself in the face of a vast universe",
		},
		{
			title: 'Meditation',
			subTitle: "Engaging with myself to create a path to clarity",
		},
		{
			title: 'Radio & Communication',
			subTitle: 'Understanding a new world of communication',
		},
		{
			title: 'Table Top RPG',
			subTitle: 'A form of escapism in a variety of fully interactive fantasy realms',
		},
		{
			title: 'Techno Anarchism',
			subTitle: 'Self host as much as possible because suffering is fun',
		},
		{
			title: '3D design & 3D printing',
			subTitle: 'Making 3D art to be printed out and make my environment more interesting',
		},
	];

	let activeSection: string = $state('root');
	let showAlt: boolean = $state(false);
	let iconInterval: number;

	onMount(() => {
		console.log("Site last updated at 1900 25th July 2026");
		setTimeout(() => {activeSection = 'root'}, 10);
		iconInterval = setInterval(() => {showAlt = !showAlt}, 750);
	});

	onDestroy(() => {
		if(iconInterval) clearInterval(iconInterval);
	});

	function scrollToSection(sectionId: string) {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
	}
	
</script>

<svelte:head>
	<title>Matthew Gould - CV Site</title>
	<meta name="keywords" content="Software, Developer, Matthew, Matt, Gould, mgould, portfolio">
	<meta name="description" content="Matthew Goulds CV site, check it out!">
	<meta name="author" content="Matthew Gould">

	{#if showAlt}
		<link rel="icon" href="{assets}/mgAlt.svg" />
	{:else}
		<link rel="icon" href="{assets}/mg.svg" />
	{/if}

</svelte:head>

<main class="min-h-screen overflow-x-hidden bg-black font-mono text-cyan-400">

	<MatrixBackground />
	<EE />

	<div class="relative z-10">

		<Header {scrollToSection} bind:activeSection={activeSection} />

		<Section id="root" title="" bind:activeSection={activeSection}>
			<Hero {personalInfo} />
		</Section>

		<Section id="about" title="About.json" bind:activeSection={activeSection}>
			<About />
		</Section>

		<Section id="skills" title="Skills.dll" bind:activeSection={activeSection}>
			<SkillGrid {skills} />
		</Section>

		<Section id="experience" title="Experience.log" bind:activeSection={activeSection}>
			<FullWidthCardList experience={experience} />
		</Section>

		<Section id="projects" title="Projects.zip" bind:activeSection={activeSection}>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each projects as project}
					<ProjectCard {project} />
				{/each}
			</div>
		</Section>

		<Section id="hobbies" title="Hobbies.exe" bind:activeSection={activeSection}>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each hobbies as hobby}
					<ProjectCard project={hobby} />
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

	:global(::-webkit-scrollbar-thumb) {
		background: linear-gradient(45deg, #ff1493, #00ffff);
		border-radius: 4px;
	}

	:global(a, button){
		cursor: pointer;
	}
</style>
