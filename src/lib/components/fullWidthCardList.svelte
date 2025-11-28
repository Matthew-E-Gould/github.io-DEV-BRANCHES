<script lang="ts">
	let { experience } = $props();
</script>

<div class="space-y-6">
    {#each experience as job}
        <div
            class="bg-opacity-50 rounded border border-cyan-400 bg-gray-900 p-6 transition-colors hover:border-cyan-200 cursor-pointer"
        >
            <div class="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 class="text-2xl font-bold text-cyan-400">{job.title}</h3>
                <span class="text-sm text-cyan-400">{job.period}</span>
            </div>
            <p class="mb-2 text-pink-200">{job.company}</p>
            <p class="text-cyan-200">{job.description}</p>
        </div>
    {/each}
</div>


