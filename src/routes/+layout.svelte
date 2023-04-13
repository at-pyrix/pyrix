<script>
	import '../styles/app.scss';
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
</script>

<svelte:head>
	<link {...fontsLink} />
</svelte:head>

<FirstTime />
<slot />

<style lang="scss">
	:global(#nprogress .bar) {
		background: linear-gradient(90deg, rgba(255, 0, 187, 1) 0%, rgba(182, 0, 255, 1) 50%, rgba(255, 173, 0, 1) 100%) !important;
	}
</style>
