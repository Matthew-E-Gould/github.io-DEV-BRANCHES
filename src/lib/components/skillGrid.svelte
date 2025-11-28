<!-- SkillGrid.svelte -->
<script lang="ts">
	let { skills } = $props();
	let skillElements: any[] = $state([]);
</script>

<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
	{#each skills as skill, index}
		<div
			bind:this={skillElements[index]}
			class="bg-opacity-50 group rounded border border-pink-400 bg-slate-900 px-6 pt-2 transition-all duration-300"
		>

			<div class="mb-3 flex items-center justify-between">
				<h3 class="text-2xl font-bold text-pink-400 transition-colors">
					{skill.name}
				</h3>
			</div>

			<div class="mb-3 grid sm:grid-cols-1 md:grid-cols-2">
				{#each skill.langs as lang}
					<span class="rounded-md bg-slate-800 px-2 py-1 text-xs text-cyan-200 mr-2 mb-2">
						{lang}
					</span>
				{/each}
			</div>

		</div>

	{/each}
</div>
