<script>
	import Nav from '$lib/blogs/Nav.svelte';
	import Header from '$lib/blogs/Header.svelte';
	import Footer from '$lib/blogs/Footer.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Jumper from '$lib/Other/Jumper.svelte';
	import '../../styles/fonts.css';
	import '../../styles/markdown.scss';

	let loaded = false;
	onMount(() => (loaded = true));
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Blogs | NotYasho</title>
	<meta name="title" content="Blogs | NotYasho" />
	<meta
		name="description"
		content="Explore all sorts of blogs written by me, be it on programming, graphic design, productivity etc. This my official blog page for my website."
	/>
	<meta name="image" content="https://raw.githubusercontent.com/NotYasho/notyasho.netlify.app/master/static/img/thumbnails/blogs.png" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://notyasho.netlify.app/blogs" />
	<meta property="og:title" content="Blogs | NotYasho" />
	<meta
		property="og:description"
		content="Explore all sorts of blogs written by me, be it on programming, graphic design, productivity etc. This my official blog page for my website."
	/>
	<meta property="og:image" content="https://raw.githubusercontent.com/NotYasho/notyasho.netlify.app/master/static/img/thumbnails/blogs.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://notyasho.netlify.app/blogs" />
	<meta property="twitter:title" content="Blogs | NotYasho" />
	<meta
		property="twitter:description"
		content="Explore all sorts of blogs written by me, be it on programming, graphic design, productivity etc. This my official blog page for my website."
	/>
	<meta property="twitter:image" content="https://raw.githubusercontent.com/NotYasho/notyasho.netlify.app/master/static/img/thumbnails/blogs.png" />
</svelte:head>

{#if loaded}
	<Header />
	<Nav />
	<main>
		<slot />
	</main>
	<Footer />
{:else}
	<section transition:fade={{ duration: 200 }}>
		<div class="loader">
			<Jumper color="	#933b6d" size="125" duration="1.3s" />
			<img src="../../img/favicon/logo.webp" alt="" />
		</div>
	</section>
{/if}

<style lang="scss">
	main {
		height: 100%;
		min-height: 100vh;
		max-width: 100%;
		padding: 1.4rem 2rem 2rem 1rem;
		margin-left: 4.8rem;
		margin-top: 4.2rem;
	}

	@media only screen and (max-width: $tablet) {
		main {
			width: 100%;
			margin: 0;
			margin-top: 4rem;
			padding: 4vh 5vw 12vh 5vw;
		}
	}

	section::before,
	section::after {
		content: '';
		width: 50vw;
		position: fixed;
		pointer-events: none;
		height: 100vh;
		opacity: 0.5;
		z-index: 100;
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
