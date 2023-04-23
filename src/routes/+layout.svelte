<script>
	import '../styles/app.scss';
	import FirstTime from '$lib/Other/firstTime.svelte';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import 'nprogress/nprogress.css';
	import { loadIcons } from '@iconify/svelte';
	loadIcons([
		'bx:calendar',
		'bx:compass',
		'bx:home-smile',
		'bx:navigation',
		'bx:search',
		'bx:time',
		'bxs:compass',
		'bxs:home-smile',
		'bxs:navigation',
		'bxs:search',
		'bxs:star',
		'mdi:warning-octagon',
		'ph:book-bookmark-thin',
		'ic:round-close',
		'ic:round-menu',
		'mdi:bookmark-multiple',
		'mdi:bookmark-multiple-outline',
		'material-symbols:bookmark-add-outline-rounded',
		'material-symbols:bookmark-remove-rounded',
		'material-symbols:forward',
		'material-symbols:info-outline-rounded',
		'material-symbols:info-rounded',
		'solar:arrow-to-top-left-broken',
		'tabler:line-dotted',
		'solar:book-bookmark-minimalistic-broken',
		'solar:ghost-broken'
	]);

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

<FirstTime />
<slot />

<style lang="scss">
	:global(#nprogress .bar) {
		background: linear-gradient(90deg, rgba(255, 0, 187, 1) 0%, rgba(182, 0, 255, 1) 50%, rgba(255, 173, 0, 1) 100%) !important;
	}
</style>
