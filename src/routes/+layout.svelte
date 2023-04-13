<script>
	import '$lib/styles/app.scss';
	import Jumper from '$lib/Other/Jumper.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import FirstTime from '$lib/Other/firstTime.svelte';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import 'nprogress/nprogress.css';
	import { loadIcons } from '@iconify/svelte';
	loadIcons([
		'ic:round-menu',
		'ic:round-close',
		'bxs:home-smile',
		'bx:home-smile',
		'bxs:compass',
		'bx:compass',
		'mdi:bookmark-multiple',
		'mdi:bookmark-multiple-outline',
		'bxs:navigation',
		'bx:navigation',
		'fluent:dark-theme-20-filled',
		'bxl:github',
		'material-symbols:bookmark-remove-rounded',
		'material-symbols:bookmark-add-outline-rounded',
		'material-symbols:forward',
		'ic:twotone-construction',
		'bx:time',
		'bx:calendar',
		'material-symbols:bookmark-remove-rounded',
		'material-symbols:bookmark-add-outline-rounded',
		'material-symbols:forward',
		'bx:time',
		'bx:calendar',
		'bxs:star'
	]);
	const fontsLink = { rel: 'preload', href: '/fonts/fonts.css', as: 'style' };

	NProgress.configure({
		easing: 'ease',
		trickleRate: 0.1,
		showSpinner: false
	});

	// only show progress bar when time > 200ms
	let timer;
	navigating.subscribe((value) => {
		if (value) {
			timer = setTimeout(() => {
				NProgress.start();
			}, 300);
		} else {
			clearTimeout(timer);
			NProgress.done();
		}
	});

	let loaded = false;
	onMount(() => (loaded = true));
</script>

<svelte:head>
	<title>NotYasho</title>
	<link {...fontsLink} />
</svelte:head>

{#if loaded}
	<FirstTime />
	<slot />
{:else}
	<section transition:fade={{ duration: 200 }}>
		<div class="loader">
			<Jumper color="	#933b6d" size="125" duration="1.3s" />
			<img src="../../img/favicon/logo.webp" alt="" />
		</div>
	</section>
{/if}

<style lang="scss">
	section::before,
	section::after {
		content: '';
		width: 50vw;
		position: fixed;
		pointer-events: none;
		height: 100vh;
		opacity: 0.5;
		z-index: -100;
		animation: growGradient 2s ease-in;
	}

	section::before {
		left: 0;
		bottom: 0;
		background-image: radial-gradient(at 45% 100%, hsla(247, 51%, 67%, 0.3) 0px, transparent 50%);
	}

	section::after {
		right: 0;
		top: 0;
		background-image: radial-gradient(at 100% 15%, hsla(247, 51%, 67%, 0.3) 0px, transparent 50%);
	}

	:global(#nprogress .bar) {
		background: linear-gradient(90deg, rgba(255, 0, 187, 1) 0%, rgba(182, 0, 255, 1) 50%, rgba(255, 173, 0, 1) 100%) !important;
	}

	img {
		position: absolute;
		border-radius: 50%;
		width: 4rem;
	}

	.loader {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		inset: 0;
	}

	@keyframes growGradient {
		0% {
			opacity: 0.2;
		}
		100% {
			opacity: 0.5;
		}
	}
</style>
