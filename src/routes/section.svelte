<!-- Section.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	let { id, title, activeSection = $bindable(), children} = $props();

	let sectionElement: any = $state();
	let isVisible: boolean = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				isVisible = entry.isIntersecting;
			},
			{ threshold: 0.1 }
		);

		if (sectionElement) {
			observer.observe(sectionElement);
		}

		return () => observer.disconnect();
	});
</script>

<section
	bind:this={sectionElement}
	{id}
	class={title.length ? "flex min-h-screen items-center px-4 pt-30" : "min-h-screen"}
	class:animate-fade-in={isVisible}
>
	{#if title.length}
		<div class="container mx-auto max-w-6xl">
			<!-- Section Title -->
			<div class="mb-16">
				<h2 class="mb-4 text-center text-4xl font-bold md:text-6xl">
					<span class="text-pink-400">{'>'}</span>
					<span class="text-cyan-400">{title}</span>
				</h2>
				<div class="mx-auto h-1 w-32 bg-gradient-to-r from-pink-400 to-cyan-400"></div>
			</div>

			<!-- Section Content -->
			<div class="animate-slide-up opacity-0" class:opacity-100={isVisible}>
				{@render children()}
			</div>
		</div>
	{:else}
        <div class="mx-auto">
            {@render children()}
        </div>
	{/if}
</section>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.animate-fade-in {
		animation: fade-in 0.8s ease-out;
	}

	.animate-slide-up {
		animation: slide-up 0.8s ease-out 0.2s both;
	}
</style>
