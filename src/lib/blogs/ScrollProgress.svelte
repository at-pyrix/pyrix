<script>
	import { onMount } from 'svelte';

	export let articleHeight;
	let progressBar;

	let innerWidth;
	let windowHeight = 0;
	let scrollY = 0;
	function handleScroll() {
		progressBar.style.width = `${(scrollY / (articleHeight - windowHeight)) * 100}%`;
	}

	onMount(() => (scrollY = 0));
</script>

<div class="progress-bar" bind:this={progressBar} />

<svelte:window on:scroll={handleScroll} bind:innerWidth bind:innerHeight={windowHeight} bind:scrollY />

<style lang="scss">
	.progress-bar {
		position: fixed;
		top: 0;
		left: 0;
		width: 0;
		height: 4px;
		background-color: $accent-2;
		z-index: 9999;
		transition: 100ms cubic-bezier(0.075, 0.82, 0.165, 1);
	}
</style>
