<script>
  import { onMount } from 'svelte';
  
  let currentSection = 'home';
  let matrixCanvas;
  let ctx;
  let animationId;
  let glitchText = '';
  let originalText = 'MATTHEW GOULD';
  
  const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
  
  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
  
  // Matrix rain effect
  const matrixChars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  let columns = [];
  let drops = [];
  
  function initMatrix() {
    const canvas = matrixCanvas;
    ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const fontSize = 16;
    const cols = canvas.width / fontSize;
    
    columns = Array(Math.floor(cols)).fill(1);
    drops = Array(Math.floor(cols)).fill(0);
    
    drawMatrix();
  }
  
  function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    
    ctx.fillStyle = '#0F0';
    ctx.font = '16px monospace';
    
    for (let i = 0; i < drops.length; i++) {
      const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
      ctx.fillText(text, i * 16, drops[i] * 16);
      
      if (drops[i] * 16 > matrixCanvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    
    animationId = requestAnimationFrame(drawMatrix);
  }
  
  function glitchEffect() {
    const chars = originalText.split('');
    const glitched = chars.map(char => {
      return Math.random() < 0.1 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char;
    });
    glitchText = glitched.join('');
    
    setTimeout(() => {
      glitchText = originalText;
    }, 100);
  }
  
  function navigateToSection(section) {
    currentSection = section;
    glitchEffect();
  }
  
  onMount(() => {
    initMatrix();
    glitchText = originalText;
    
    // Periodic glitch effect
    setInterval(glitchEffect, 3000);
    
    // Handle window resize
    const handleResize = () => {
      matrixCanvas.width = window.innerWidth;
      matrixCanvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<main class="app">
  <canvas bind:this={matrixCanvas} class="matrix-bg"></canvas>
  
  <nav class="nav">
    <div class="nav-brand">
      <span class="glitch-text">{glitchText}</span>
    </div>
    <div class="nav-links">
      {#each sections as section}
        <button 
          class="nav-link {currentSection === section ? 'active' : ''}"
          on:click={() => navigateToSection(section)}
        >
          {section.toUpperCase()}
        </button>
      {/each}
    </div>
  </nav>
  
  <div class="content">
    {#if currentSection === 'home'}
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="typing-effect">WELCOME TO THE MATRIX</span>
          </h1>
          <p class="hero-subtitle">Full Stack Developer • Digital Architect • Code Warrior</p>
          <div class="hero-cta">
            <button class="cta-button" on:click={() => navigateToSection('about')}>
              ENTER THE SYSTEM
            </button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="digital-face">
            <div class="scan-line"></div>
          </div>
        </div>
      </section>
    {/if}
    
    {#if currentSection === 'about'}
      <section class="about">
        <div class="terminal-window">
          <div class="terminal-header">
            <span class="terminal-title">about_me.exe</span>
          </div>
          <div class="terminal-content">
            <p class="terminal-text">
              > Initializing bio-data...<br>
              > Loading personality matrix...<br>
              > COMPLETE<br><br>
              I'm a passionate full-stack developer with expertise in modern web technologies.
              My mission is to create innovative digital solutions that push the boundaries
              of what's possible in the digital realm.
            </p>
            <div class="stats-grid">
              <div class="stat-item">
                <span class="stat-label">YEARS_EXPERIENCE</span>
                <span class="stat-value">5+</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">PROJECTS_COMPLETED</span>
                <span class="stat-value">50+</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">COFFEE_CONSUMED</span>
                <span class="stat-value">∞</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/if}
    
    {#if currentSection === 'skills'}
      <section class="skills">
        <h2 class="section-title">SYSTEM CAPABILITIES</h2>
        <div class="skills-grid">
          {#each [
            { name: 'JavaScript', level: 95 },
            { name: 'TypeScript', level: 90 },
            { name: 'Svelte/SvelteKit', level: 85 },
            { name: 'React', level: 88 },
            { name: 'Node.js', level: 87 },
            { name: 'Python', level: 82 },
            { name: 'PostgreSQL', level: 85 },
            { name: 'Docker', level: 80 }
          ] as skill}
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">{skill.name}</span>
                <span class="skill-percentage">{skill.level}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill" style="width: {skill.level}%"></div>
              </div>
            </div>
          {/each}
        </div>
      </section>
    {/if}
    
    {#if currentSection === 'experience'}
      <section class="experience">
        <h2 class="section-title">MISSION HISTORY</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Senior Full Stack Developer</h3>
              <p class="company">TechCorp Industries</p>
              <p class="period">2022 - Present</p>
              <p class="description">
                Lead development of enterprise-level applications using cutting-edge technologies.
                Architected scalable solutions serving millions of users.
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Full Stack Developer</h3>
              <p class="company">Digital Solutions Ltd</p>
              <p class="period">2020 - 2022</p>
              <p class="description">
                Developed responsive web applications and RESTful APIs.
                Collaborated with cross-functional teams to deliver high-quality software.
              </p>
            </div>
          </div>
        </div>
      </section>
    {/if}
    
    {#if currentSection === 'projects'}
      <section class="projects">
        <h2 class="section-title">DIGITAL CREATIONS</h2>
        <div class="projects-grid">
          {#each [
            { name: 'E-Commerce Platform', tech: 'Svelte • Node.js • PostgreSQL', status: 'DEPLOYED' },
            { name: 'Real-time Chat App', tech: 'React • WebSocket • Redis', status: 'ACTIVE' },
            { name: 'AI Dashboard', tech: 'TypeScript • Python • TensorFlow', status: 'BETA' },
            { name: 'Blockchain Wallet', tech: 'Vue.js • Web3 • Solidity', status: 'DEVELOPMENT' }
          ] as project}
            <div class="project-card">
              <div class="project-header">
                <h3>{project.name}</h3>
                <span class="project-status {project.status.toLowerCase()}">{project.status}</span>
              </div>
              <p class="project-tech">{project.tech}</p>
              <div class="project-actions">
                <button class="project-btn">VIEW CODE</button>
                <button class="project-btn">LIVE DEMO</button>
              </div>
            </div>
          {/each}
        </div>
      </section>
    {/if}
    
    {#if currentSection === 'contact'}
      <section class="contact">
        <div class="contact-terminal">
          <div class="terminal-header">
            <span class="terminal-title">contact_matrix.exe</span>
          </div>
          <div class="terminal-content">
            <p class="terminal-text">
              > Establishing connection...<br>
              > Encryption: ENABLED<br>
              > Channel: SECURE<br><br>
              Ready to collaborate on your next digital mission?
            </p>
            <div class="contact-methods">
              <div class="contact-item">
                <span class="contact-label">EMAIL:</span>
                <span class="contact-value">matthew@mgould.net</span>
              </div>
              <div class="contact-item">
                <span class="contact-label">GITHUB:</span>
                <span class="contact-value">github.com/mgould</span>
              </div>
              <div class="contact-item">
                <span class="contact-label">LINKEDIN:</span>
                <span class="contact-value">linkedin.com/in/mgould</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/if}
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Courier New', monospace;
    background: #000;
    color: #0F0;
    overflow-x: hidden;
  }
  
  .app {
    min-height: 100vh;
    position: relative;
  }
  
  .matrix-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #0F0;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-brand {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .glitch-text {
    animation: glitch 0.1s infinite;
    text-shadow: 2px 0 #ff0000, -2px 0 #00ffff;
  }
  
  @keyframes glitch {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
  }
  
  .nav-links {
    display: flex;
    gap: 2rem;
  }
  
  .nav-link {
    background: none;
    border: 1px solid #0F0;
    color: #0F0;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .nav-link:hover,
  .nav-link.active {
    background: #0F0;
    color: #000;
    box-shadow: 0 0 20px #0F0;
  }
  
  .content {
    padding-top: 80px;
    min-height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 2rem 2rem;
  }
  
  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    max-width: 1200px;
    width: 100%;
  }
  
  .hero-title {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 0 0 20px #0F0;
  }
  
  .typing-effect {
    overflow: hidden;
    border-right: 0.15em solid #0F0;
    white-space: nowrap;
    animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
  }
  
  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }
  
  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #0F0; }
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.8;
  }
  
  .cta-button {
    background: none;
    border: 2px solid #0F0;
    color: #0F0;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  .cta-button:hover {
    background: #0F0;
    color: #000;
    transform: scale(1.05);
    box-shadow: 0 0 30px #0F0;
  }
  
  .hero-visual {
    display: flex;
    justify-content: center;
    position: relative;
  }
  
  .digital-face {
    width: 300px;
    height: 300px;
    border: 2px solid #0F0;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
  }
  
  .scan-line {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #0F0;
    animation: scan 2s linear infinite;
    box-shadow: 0 0 10px #0F0;
  }
  
  @keyframes scan {
    0% { top: 0; }
    100% { top: 100%; }
  }
  
  .terminal-window {
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid #0F0;
    border-radius: 8px;
    max-width: 800px;
    width: 100%;
    box-shadow: 0 0 30px rgba(0, 255, 0, 0.3);
  }
  
  .terminal-header {
    background: #0F0;
    color: #000;
    padding: 0.5rem 1rem;
    font-weight: bold;
    border-radius: 8px 8px 0 0;
  }
  
  .terminal-content {
    padding: 2rem;
  }
  
  .terminal-text {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  
  .stat-item {
    border: 1px solid #0F0;
    padding: 1rem;
    text-align: center;
    background: rgba(0, 255, 0, 0.1);
  }
  
  .stat-label {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  
  .stat-value {
    font-size: 2rem;
    font-weight: bold;
    color: #0F0;
  }
  
  .section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    text-shadow: 0 0 20px #0F0;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    max-width: 1000px;
    width: 100%;
  }
  
  .skill-item {
    background: rgba(0, 255, 0, 0.1);
    border: 1px solid #0F0;
    padding: 1.5rem;
    border-radius: 8px;
  }
  
  .skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  
  .skill-name {
    font-weight: bold;
  }
  
  .skill-bar {
    height: 8px;
    background: rgba(0, 255, 0, 0.2);
    border-radius: 4px;
    overflow: hidden;
  }
  
  .skill-fill {
    height: 100%;
    background: #0F0;
    transition: width 1s ease;
    animation: glow 2s ease-in-out infinite alternate;
  }
  
  @keyframes glow {
    from { box-shadow: 0 0 5px #0F0; }
    to { box-shadow: 0 0 20px #0F0; }
  }
  
  .timeline {
    max-width: 800px;
    width: 100%;
    position: relative;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: #0F0;
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
  }
  
  .timeline-marker {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background: #0F0;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 0 0 20px #0F0;
  }
  
  .timeline-content {
    background: rgba(0, 255, 0, 0.1);
    border: 1px solid #0F0;
    padding: 2rem;
    border-radius: 8px;
    width: 45%;
    margin-left: 55%;
  }
  
  .timeline-item:nth-child(even) .timeline-content {
    margin-left: 0;
  }
  
  .company {
    color: #0F0;
    font-weight: bold;
    margin: 0.5rem 0;
  }
  
  .period {
    opacity: 0.8;
    margin-bottom: 1rem;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    width: 100%;
  }
  
  .project-card {
    background: rgba(0, 255, 0, 0.1);
    border: 1px solid #0F0;
    padding: 2rem;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 255, 0, 0.3);
  }
  
  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .project-status {
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: bold;
  }
  
  .project-status.deployed { background: #0F0; color: #000; }
  .project-status.active { background: #00FF00; color: #000; }
  .project-status.beta { background: #FFFF00; color: #000; }
  .project-status.development { background: #FF4500; color: #000; }
  
  .project-tech {
    margin-bottom: 1.5rem;
    opacity: 0.8;
  }
  
  .project-actions {
    display: flex;
    gap: 1rem;
  }
  
  .project-btn {
    background: none;
    border: 1px solid #0F0;
    color: #0F0;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    font-size: 0.9rem;
  }
  
  .project-btn:hover {
    background: #0F0;
    color: #000;
  }
  
  .contact-methods {
    display: grid;
    gap: 1rem;
  }
  
  .contact-item {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  
  .contact-label {
    font-weight: bold;
    min-width: 100px;
  }
  
  .contact-value {
    color: #0F0;
  }
  
  @media (max-width: 768px) {
    .hero {
      grid-template-columns: 1fr;
      text-align: center;
    }
    
    .hero-title {
      font-size: 2rem;
    }
    
    .nav-links {
      flex-wrap: wrap;
      gap: 1rem;
    }
    
    .timeline::before {
      left: 20px;
    }
    
    .timeline-marker {
      left: 20px;
    }
    
    .timeline-content {
      width: calc(100% - 60px);
      margin-left: 60px;
    }
    
    .timeline-item:nth-child(even) .timeline-content {
      margin-left: 60px;
    }
  }
</style>