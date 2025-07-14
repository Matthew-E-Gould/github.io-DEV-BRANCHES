<!-- ProjectCard.svelte -->
<script>
	let {project} = $props();

	let isHovered = false;
</script>

<div
	class="group bg-opacity-50 relative transform overflow-hidden rounded-lg border border-gray-700 bg-gray-900 transition-all duration-300"
>
	{#if project.imageLink}
		<!-- Project ImageLink -->
		<div class="relative h-48 overflow-hidden">
			<img
				src={project.imageLink}
				alt={project.title}
				class="h-full w-full object-cover transition-transform duration-300"
			/>

			<!-- Overlay -->
			<div
				class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"
			></div>

			<!-- Hover overlay -->
			<div
				class="absolute inset-0 bg-gradient-to-r from-pink-400 to-cyan-400 opacity-0 transition-opacity duration-300"
			></div>

			<!-- Tech badges -->
			<div class="absolute top-4 left-4 flex flex-wrap gap-2">
				{#each project.tech as tech}
					<span
						class="bg-opacity-70 rounded border border-cyan-400 bg-black px-2 py-1 text-xs text-cyan-400"
					>
						{tech}
					</span>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Project Info -->
	<div class="p-6">
		{#if project.title}
			<h2 class="mb-2 text-xl font-bold text-pink-400 transition-colors">
				{project.title}
			</h2>
		{/if}

		{#if project.subTitle}
			<h2 class="mb-2 font-bold text-cyan-400 transition-colors">
				{project.subTitle}
			</h2>
		{/if}

		{#if project.description}
			<p class="mb-4 line-clamp-4 text-gray-300">
				{project.description}
			</p>
		{/if}

		{#if !!! project.imageLink && project.tech}
			<div class="flex flex-wrap gap-2 mb-4">
				{#each project.tech as tech}
					<span
						class="bg-opacity-70 rounded border border-cyan-400 bg-black px-2 py-1 text-xs text-cyan-400"
					>
						{tech}
					</span>
				{/each}
			</div>
		{/if}

		{#if project.codeLink || project.demoLink}
			<!-- Action buttons -->
			<div class="flex gap-3">

				{#if project.codeLink}
					<a
						href={project.codeLink}
						target="_blank"
						class="flex items-center gap-2 rounded border border-cyan-400 bg-transparent px-4 py-2 text-sm text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
					>
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
						View Code
					</a>
				{/if}

				{#if project.demoLink}
					<a
						class="flex items-center gap-2 rounded border border-pink-400 bg-transparent px-4 py-2 text-sm text-pink-400 transition-all duration-300 hover:bg-pink-400 hover:text-black"
						href={project.demoLink}
						target="_blank"
					>
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
							/>
						</svg>
						Demo
					</a>
				{/if}

			</div>
		{/if}
	</div>
</div>

<style>
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
