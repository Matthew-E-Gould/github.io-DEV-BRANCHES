<!-- MatrixBackground.svelte -->
<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';

	const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンЖДф';
	// const matrixChars = '幻霊影夜朧幽月星魔霞智悟静思心瞑信哲夢覚孤独烈破反零刹影狂斬電機鋼雷磁音閃速光網龍鳳狐虎鴉狼蛇獅蛟鯨';
	// const matrixChars = '01'
	const fontSize = 14;
	const fps = 1000  / 14;

	let canvas: any = $state();
	let ctx: any = $state();
	let animationId: number = $state(0);
	let drops: any[] = $state([]);
	let lastFrameUpdate = $state(new Date().getTime());

	onMount(() => {
		ctx = canvas.getContext('2d');

		// Matrix configuration
		const columns = Math.floor(canvas.width / fontSize);
		drops = Array(columns).fill(1);

		resizeCanvas();
		animate();

		if(browser) window.addEventListener('resize', resizeCanvas);

	});

	onDestroy(() => {
		if(browser) {
			window.removeEventListener('resize', resizeCanvas);
			cancelAnimationFrame(animationId);
		}
	})

	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	function animate() {
		const currtime = new Date().getTime()
		if (lastFrameUpdate + fps < currtime)
		{
			lastFrameUpdate = currtime;
			draw();
		}
		animationId = requestAnimationFrame(animate);
	}

	function draw() {
		// Black background with transparency for trail effect
		ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// Matrix text
		ctx.font = `${fontSize}px monospace`;

		for (let i = 0; i < drops.length; i++) {
			const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
			const x = i * fontSize;
			const y = drops[i] * fontSize;

			// Add pink highlights randomly
			if (Math.random() < 0.1) {
				ctx.fillStyle = '#ff1493';
			} else {
				ctx.fillStyle = '#00ffff';
			}

			ctx.fillText(text, x, y);

			// Reset drop to top randomly
			if (y > canvas.height && Math.random() > 0.975) {
				drops[i] = 0;
			}

			drops[i]++;
		}
	}
</script>

<canvas
	bind:this={canvas}
	class="fixed inset-0 z-0 opacity-20"
	width={typeof window !== 'undefined' ? window.innerWidth : 800}
	height={typeof window !== 'undefined' ? window.innerHeight : 600}
></canvas>
