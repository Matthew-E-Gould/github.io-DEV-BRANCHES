<!-- Hero.svelte -->
<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let {
		personalInfo
	} = $props();

	let typewriterText: string = $state('');
	let showCursor: boolean = $state(true);
	let typeInterval: number = $state(0);
	let cursorInterval: number = $state(0);

	const fullText = personalInfo.tagline;

	onMount(() => {
		let i = 0;
		typeInterval = setInterval(() => {
			if (i < fullText.length) {
				typewriterText += fullText.charAt(i);
				i++;
			} else {
				clearInterval(typeInterval);
			}
		}, 50);

		cursorInterval = setInterval(() => {
			showCursor = !showCursor;
		}, 500);

	});

	onDestroy(() => {
		clearInterval(typeInterval);
		clearInterval(cursorInterval);
	})
</script>

<section class="relative flex min-h-screen items-center justify-center">
	<div class="mx-auto max-w-4xl px-4 text-center">
		<!-- Main Title -->
		<div class="mb-8">
			<h1 class="mb-4 text-6xl font-bold md:text-8xl text-cyan-400">{personalInfo.name}</h1>
			<div class="mb-4 text-2xl text-pink-400 md:text-3xl">{personalInfo.title}</div>
		</div>

		<!-- Typewriter Effect -->
		<div class="mb-8 flex h-16 items-center justify-center text-xl text-cyan-400 md:text-2xl">
			<span class="pr-2">
				{typewriterText}
				{#if showCursor}
					<span class="w-2">_</span>
				{:else}
					<span class="w-2">&nbsp;</span>
				{/if}
			</span>
		</div>

		<div class="flex flex-col justify-center gap-4 sm:flex-row text-pink-400">

			Sorry - I am not looking for work at the moment.

			<!-- <button
				class="group relative overflow-hidden border-2 border-cyan-400 bg-transparent px-8 py-4 text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
			>
				<span class="relative z-10">Download Resume</span>
				<div
					class="absolute inset-0 origin-left scale-x-0 transform bg-cyan-400 transition-transform duration-300 group-hover:scale-x-100"
				></div>
			</button> -->

			<!-- <button
				class="group relative overflow-hidden border-2 border-pink-400 bg-transparent px-8 py-4 text-pink-400 transition-all duration-300 hover:bg-pink-400 hover:text-black"
			>
				<span class="relative z-10">View Projects</span>
				<div
					class="absolute inset-0 origin-left scale-x-0 transform bg-pink-400 transition-transform duration-300 group-hover:scale-x-100"
				></div>
			</button> -->
		</div>

		<!-- Scroll Indicator -->
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
			Scroll for more info
		</div>
		
	</div>
</section>
