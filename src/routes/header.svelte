<!-- Header.svelte -->
<script lang="ts">
	let { scrollToSection, activeSection } = $props();

	let isMenuOpen = $state(false);

	const navItems = [
		{ id: 'about', label: 'About.json' },
		{ id: 'skills', label: 'Skills.dll' },
		{ id: 'experience', label: 'Experience.log' },
		{ id: 'projects', label: 'Projects.zip' },
		{ id: 'hobbies', label: 'Hobbies.exe' }
	];

	function handleNavClick(sectionId: string) {
		scrollToSection(sectionId);
		isMenuOpen = false;
	}
</script>

<header class="fixed top-0 z-50 w-full border-b border-cyan-500 bg-black">
	<div class="container mx-auto px-2 py-4">
		<div class="flex items-center justify-between">
			
			<button class="text-2xl font-bold" onclick={() => handleNavClick('root')}>
				<span class="text-pink-400">&lt;</span>
				<span class="text-cyan-400">mgould.net</span>
				<span class="text-pink-400">/&gt;</span>
			</button>

			<nav class="hidden space-x-8 md:flex">
				{#each navItems as item}
					<button
						onclick={() => handleNavClick(item.id)}
						class="group relative text-cyan-400 transition-colors hover:text-pink-400"
						class:text-pink-400={activeSection === item.id}
					>
						{item.label}
						<span
							class="absolute bottom-0 left-0 h-0.5 w-0 bg-pink-400 transition-all group-hover:w-full"
							class:w-full={activeSection === item.id}
						></span>
					</button>
				{/each}
			</nav>

			<button
				onclick={() => (isMenuOpen = !isMenuOpen)}
				class="text-cyan-400 transition-colors hover:text-pink-400 md:hidden"
				aria-label="burgur menu"
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
					/>
				</svg>
			</button>

		</div>
	</div>

	<!-- Mobile Navigation -->
	{#if isMenuOpen}
		<div class="bg-opacity-95 border-t border-cyan-500 bg-black md:hidden">
			<nav class="space-y-2 px-4 py-4">
				{#each navItems as item}
					<button
						onclick={() => handleNavClick(item.id)}
						class="block w-full rounded px-4 py-2 text-left text-cyan-400 transition-colors hover:bg-gray-800 hover:text-pink-400"
						class:text-pink-400={activeSection === item.id}
						class:bg-gray-800={activeSection === item.id}
					>
						{item.label}
					</button>
				{/each}
			</nav>
		</div>
	{/if}
</header>
