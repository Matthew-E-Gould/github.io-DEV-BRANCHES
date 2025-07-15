<!-- ProjectCard.svelte -->
<script>
  export let project;
  
  let isHovered = false;
</script>

<div 
  class="group relative bg-gray-900 bg-opacity-50 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105"
  on:mouseenter={() => isHovered = true}
  on:mouseleave={() => isHovered = false}
>
  <!-- Project Image -->
  <div class="relative h-48 overflow-hidden">
    <img 
      src={project.image} 
      alt={project.title}
      class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
    
    <!-- Hover overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-pink-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    
    <!-- Tech badges -->
    <div class="absolute top-4 left-4 flex flex-wrap gap-2">
      {#each project.tech as tech}
        <span class="px-2 py-1 bg-black bg-opacity-70 text-cyan-400 text-xs rounded border border-cyan-400">
          {tech}
        </span>
      {/each}
    </div>
  </div>
  
  <!-- Project Info -->
  <div class="p-6">
    <h3 class="text-xl font-bold text-pink-400 mb-2 group-hover:text-cyan-400 transition-colors">
      {project.title}
    </h3>
    
    <p class="text-gray-300 mb-4 line-clamp-3">
      {project.description}
    </p>
    
    <!-- Action buttons -->
    <div class="flex gap-3">
      <a 
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 px-4 py-2 bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded text-sm"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
        </svg>
        View Code
      </a>
      
      <button class="flex items-center gap-2 px-4 py-2 bg-transparent border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 rounded text-sm">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
        </svg>
        Demo
      </button>
    </div>
  </div>
  
  <!-- Animated border -->
  <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
    <div class="absolute inset-0 bg-gradient-to-r from-pink-400 via-cyan-400 to-pink-400 rounded-lg">
      <div class="absolute inset-0.5 bg-gray-900 rounded-lg"></div>
    </div>
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