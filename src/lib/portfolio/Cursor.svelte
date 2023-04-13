<!-- SOURCE: https://codepen.io/gabrielcojea/pen/jOWRBrL -->
<script>
	import { onMount } from 'svelte';

	let cursor;
	let cursorCircle;

	const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
	const pos = { x: 0, y: 0 }; // cursor's coordinates
	const speed = 0.1; // between 0 and 1

	const updateCoordinates = (e) => {
		mouse.x = e.clientX;
		mouse.y = e.clientY;
	};

	function getAngle(diffX, diffY) {
		return (Math.atan2(diffY, diffX) * 180) / Math.PI;
	}

	function getSqueeze(diffX, diffY) {
		const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
		const maxSqueeze = 1;
		const accelerator = 1500;
		return Math.min(distance / accelerator, maxSqueeze);
	}

	const updateCursor = () => {
		const diffX = Math.round(mouse.x - pos.x);
		const diffY = Math.round(mouse.y - pos.y);

		pos.x += diffX * speed;
		pos.y += diffY * speed;

		const angle = getAngle(diffX, diffY);
		const squeeze = getSqueeze(diffX, diffY);

		const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) + ')';
		const rotate = 'rotate(' + angle + 'deg)';
		const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

		cursor.style.transform = translate;
		cursorCircle.style.transform = rotate + scale;
	};

	function loop() {
		updateCursor();
		requestAnimationFrame(loop);
	}

	onMount(() => {
		window.addEventListener('mousemove', updateCoordinates);

		requestAnimationFrame(loop);
	});
</script>

<div id="cursor" bind:this={cursor}>
	<div class="cursor__circle" bind:this={cursorCircle} />
</div>

<style lang="scss">
	#cursor {
		position: fixed;
		z-index: 99;
		left: 0;
		top: 0;
		pointer-events: none;
		will-change: transform;
		mix-blend-mode: difference;
	}

	@media (hover: hover) and (pointer: fine) {
		.cursor__circle {
			width: 3rem;
			height: 3rem;
			margin-top: -50%;
			margin-left: -50%;
			border-radius: 50%;
			border: solid 1px #cabbff9d;
			transition: height 0.3s cubic-bezier(0.25, 1, 0.5, 1);
		}
	}
</style>
