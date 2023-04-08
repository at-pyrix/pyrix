<script>
	export const durationUnitRegex = /[a-zA-Z]/;
	export const calculateRgba = (color, opacity) => {
		if (color[0] === '#') {
			color = color.slice(1);
		}
		if (color.length === 3) {
			let res = '';
			color.split('').forEach((c) => {
				res += c;
				res += c;
			});
			color = res;
		}
		const rgbValues = (color.match(/.{2}/g) || []).map((hex) => parseInt(hex, 16)).join(', ');
		return `rgba(${rgbValues}, ${opacity})`;
	};
	export const range = (size, startAt = 0) => [...Array(size).keys()].map((i) => i + startAt);
    
	export let color = '#FF3E00';
	export let unit = 'px';
	export let duration = '1s';
	export let size = '60';
	export let pause = false;
	let durationUnit = duration.match(durationUnitRegex)?.[0] ?? 's';
	let durationNum = duration.replace(durationUnitRegex, '');
</script>

<div class="wrapper" style="--size: {size}{unit}; --color: {color}; --duration: {duration};">
	{#each range(3, 1) as version}
		<div class="circle" class:pause-animation={pause} style="animation-delay: {(+durationNum / 3) * (version - 1) + durationUnit};" />
	{/each}
</div>

<style>
	.wrapper {
		width: var(--size);
		height: var(--size);
	}
	.circle {
		border-radius: 100%;
		animation-fill-mode: both;
		position: absolute;
		opacity: 0;
		width: var(--size);
		height: var(--size);
		background-color: var(--color);
		animation: bounce var(--duration) linear infinite;
	}
	.pause-animation {
		animation-play-state: paused;
	}
	@keyframes bounce {
		0% {
			opacity: 0;
			transform: scale(0);
		}
		5% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: scale(1);
		}
	}
</style>
