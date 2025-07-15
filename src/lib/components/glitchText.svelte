<!-- GlitchText.svelte -->
<script>
  export let text;
  export let active = false;
  let className = '';
  export { className as class };

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  function getRandomChar() {
    return glitchChars[Math.floor(Math.random() * glitchChars.length)];
  }
  
  function glitchText(originalText) {
    if (!active) return originalText;
    
    return originalText
      .split('')
      .map(char => Math.random() < 0.1 ? getRandomChar() : char)
      .join('');
  }
  
  $: displayText = glitchText(text);
</script>

<div class="relative inline-block {className}">
  <span 
    class="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-cyan-400 to-pink-400 animate-gradient"
    class:animate-glitch={active}
  >
    {displayText}
  </span>
  
  {#if active}
    <span class="absolute top-0 left-0 text-pink-400 opacity-80 animate-glitch-1">
      {text}
    </span>
    <span class="absolute top-0 left-0 text-cyan-400 opacity-80 animate-glitch-2">
      {text}
    </span>
  {/if}
</div>

<style>
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes glitch {
    0%, 100% { transform: translate(0); }
    10% { transform: translate(-2px, 1px); }
    20% { transform: translate(2px, -1px); }
    30% { transform: translate(-1px, 2px); }
    40% { transform: translate(1px, -2px); }
    50% { transform: translate(-2px, -1px); }
    60% { transform: translate(2px, 1px); }
    70% { transform: translate(-1px, -2px); }
    80% { transform: translate(1px, 2px); }
    90% { transform: translate(-2px, -1px); }
  }
  
  @keyframes glitch-1 {
    0%, 100% { transform: translate(0); }
    10% { transform: translate(-1px, 0); }
    20% { transform: translate(1px, 0); }
    30% { transform: translate(0, 1px); }
    40% { transform: translate(0, -1px); }
    50% { transform: translate(-1px, 1px); }
    60% { transform: translate(1px, -1px); }
    70% { transform: translate(-1px, -1px); }
    80% { transform: translate(1px, 1px); }
    90% { transform: translate(-1px, 0); }
  }
  
  @keyframes glitch-2 {
    0%, 100% { transform: translate(0); }
    10% { transform: translate(1px, 0); }
    20% { transform: translate(-1px, 0); }
    30% { transform: translate(0, -1px); }
    40% { transform: translate(0, 1px); }
    50% { transform: translate(1px, -1px); }
    60% { transform: translate(-1px, 1px); }
    70% { transform: translate(1px, 1px); }
    80% { transform: translate(-1px, -1px); }
    90% { transform: translate(1px, 0); }
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }
  
  .animate-glitch {
    animation: glitch 0.2s linear infinite;
  }
  
  .animate-glitch-1 {
    animation: glitch-1 0.2s linear infinite;
  }
  
  .animate-glitch-2 {
    animation: glitch-2 0.2s linear infinite;
  }
</style>