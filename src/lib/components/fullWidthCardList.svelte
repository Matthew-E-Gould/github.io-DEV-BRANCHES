<script lang="ts">
	let { experience } = $props();
</script>

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


