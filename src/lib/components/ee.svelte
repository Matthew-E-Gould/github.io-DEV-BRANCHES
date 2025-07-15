<script lang="ts">
    import eeAudio from "../music/easterEggMusic.wav"
    let code: string[] = $state([]);
    let canTriggerEE: boolean = $state(true);
    let toggle: boolean = $state(true);
    let toggle2: boolean = $state(true);
    const cSpamText = "%c╔═══════════════════════════════╗\n║     Easter Egg Activated!     ║\n╚═══════════════════════════════╝"

    function handleKeydown(e: KeyboardEvent){
        code.push(e.key);
        if(code.length > 10) code.shift();
        const secret = code.map(e => btoa(e));
        const test = secret.toString() == "QXJyb3dVcA==,QXJyb3dVcA==,QXJyb3dEb3du,QXJyb3dEb3du,QXJyb3dMZWZ0,QXJyb3dSaWdodA==,QXJyb3dMZWZ0,QXJyb3dSaWdodA==,Yg==,YQ==";
        if(test && canTriggerEE) {
            initAudio();
            consoleSpam();
            enableCursorTrail();
        }
    }

    function initAudio() {
        const audio = new Audio(eeAudio);
        audio.volume = 0.25;
        audio.play();
        canTriggerEE = false;
    }

    async function consoleSpam(){
        toggle = !toggle;
        if(toggle)  console.log(cSpamText, "background:#000;color:#00D3F2;font-weight:bold;font-size:24px");
        else        console.log(cSpamText, "background:#000;color:#FB64B6;font-weight:bold;font-size:24px");
        setTimeout(() => consoleSpam(), 1000);
    }

    function enableCursorTrail() {
        let trail: any[] = [];
        let mouseX = -16;
        let mouseY = -16;
        let animationId: number = 0;
        
        function createTrailDot(x: number, y: number) {
            const dot = document.createElement('div');
            toggle2 = !toggle2;
            let tColour = "#00D3F2";
            if(toggle2) tColour = "#FB64B6";
            dot.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: ${tColour};
                border-radius: 50%;
                z-index: 9999;
                left: ${x}px;
                top: ${y}px;
            `;
            document.body.appendChild(dot);
            
            trail.push(dot);
            if (trail.length > 100) {
                trail.shift().remove();
            }
        }
        
        function updateTrail() {
            createTrailDot(mouseX, mouseY);
            animationId = requestAnimationFrame(updateTrail);
        }
        
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        
        document.addEventListener('mousemove', handleMouseMove);
        
        // start the animation loop
        updateTrail();
        
        // clean up function
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
            trail.forEach(dot => dot.remove());
        };
    }

</script>

<svelte:window on:keydown={handleKeydown} />
