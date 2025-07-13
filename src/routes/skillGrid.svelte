<!-- SkillGrid.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	let { skills } = $props();

	let skillElements: any[] = $state([]);
	let isVisible: boolean = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					isVisible = true;
					animateSkills();
				}
			},
			{ threshold: 0.5 }
		);

		skillElements.forEach((el) => {
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	});

	function animateSkills() {
		skillElements.forEach((el, index) => {
			if (el) {
				const progressBar = el.querySelector('.progress-bar');
				const skill = skills[index];

				setTimeout(() => {
					progressBar.style.width = `${skill.level}%`;
				}, index * 100);
			}
		});
	}
</script>

<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
	{#each skills as skill, index}
		<div
			bind:this={skillElements[index]}
			class="bg-opacity-50 group rounded border border-cyan-500 bg-slate-900 p-6 transition-all duration-300"
		>

			<div class="mb-3 flex items-center justify-between">
				<h3 class="text-xl font-bold text-pink-400 transition-colors">
					{skill.name}
				</h3>
			</div>

			<div class="mb-3 grid sm:grid-cols-1 md:grid-cols-2">
				{#each skill.langs as lang}
					<span class="rounded-md bg-slate-800 px-2 py-1 text-xs text-gray-300 mr-2 mb-2">
						{lang}
					</span>
				{/each}
			</div>

		</div>

	{/each}
</div>
