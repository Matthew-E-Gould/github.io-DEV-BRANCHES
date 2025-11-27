<script>
    let {
        showModal = false,
        title = '',
        children,
    } = $props();
    function closeModal() {
        showModal = false;
    }
    function handleKeydown(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    }
</script>
<svelte:window on:keydown={handleKeydown} />

{#if showModal}
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-xl max-w-xl w-full mx-4 max-h-[80%] flex flex-col">
            <div class="flex justify-between items-center p-6 pb-4 border-b border-pink-400 bg-black rounded-t-lg">
                <h3 class="text-lg font-medium text-cyan-400">{title}</h3>
                <button onclick={closeModal} class="text-pink-400 hover:text-pink-100" aria-label="Close">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="flex-1 overflow-y-auto p-6 pt-4 text-cyan-400">
                {@render children()}
            </div>
        </div>
    </div>
{/if}
