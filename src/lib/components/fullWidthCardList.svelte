<script lang="ts">
import Modal from './modal.svelte';
let { experience } = $props();

    let modalToggle: boolean = $state(false);
    let selectedJob: any = $state(null)

    function toggleModal(index: number){
        console.log(index);
        modalToggle = false;
        modalToggle = true;
        selectedJob = experience[index] ?? null;
    }

    let modalTitle = $derived(`${selectedJob?.title.split(" (")[0] ?? ""} - ${selectedJob?.company.split(" (")[0] ?? ""}`);
</script>

<div class="space-y-6">
    {#each experience as job, index}
        <div
            class="bg-opacity-50 rounded border border-cyan-400 bg-gray-900 p-6 transition-colors hover:border-cyan-600 cursor-pointer"
            onclick={() => toggleModal(index)}
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

<Modal bind:showModal={modalToggle} title={modalTitle}>
    <h1>{selectedJob.period}</h1>
    <br>
    <h2>{selectedJob.description}</h2>
</Modal>


