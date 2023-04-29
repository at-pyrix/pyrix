<script>
	import Nav from '$lib/blogs/Nav.svelte';
	import Header from '$lib/blogs/Header.svelte';
	import '../../styles/markdown.scss';
	import { fade } from 'svelte/transition';
	import Footer from '$lib/blogs/Footer.svelte';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>About | NotYasho</title>
	<meta name="title" content="About | NotYasho" />
	<meta
		name="description"
        content="About page - NotYasho. I'm a developer/designer who loves to code. This is my personal website where I post my projects and blogs."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://notyasho.netlify.app/about" />
	<meta property="og:title" content="About | NotYasho" />
	<meta
		property="og:description"
		content="About page - NotYasho. I'm a developer/designer who loves to code. This is my personal website where I post my projects and blogs."
	/>

	<!-- Twitter -->
	<meta property="twitter:url" content="https://notyasho.netlify.app/about" />
	<meta property="twitter:title" content="About | NotYasho" />
	<meta
		property="twitter:description"
		content="About page - NotYasho. I'm a developer/designer who loves to code. This is my personal website where I post my projects and blogs."
	/>
</svelte:head>

<Header />
<Nav />
<main transition:fade>
	<slot />
</main>
<Footer />

<style lang="scss">
	main {
		max-width: 100%;
		min-height: 100vh !important;
		height: 100% !important;
		padding: 1.4rem 1rem;
		margin-left: 4.8rem;
		margin-top: 4.2rem;
		min-height: 100%;

		display: flex;
		justify-content: center;
	}

	main::before,
	main::after {
		content: '';
		width: 50vw;
		position: fixed;
		pointer-events: none;
		height: 100vh;
		opacity: 0.5;
		z-index: 100;
		animation: growGradient 2s ease-in;
	}

	main::before {
		left: 0;
		bottom: 0;
		background-image: radial-gradient(at 45% 100%, hsla(170, 29%, 49%, 0.2) 0px, transparent 50%);
	}

	main::after {
		right: 0;
		top: 0;
		background-image: radial-gradient(at 100% 15%, hsla(147, 29%, 49%, 0.3) 0px, transparent 50%);
	}

	@media only screen and (max-width: $tablet) {
		main {
			width: 100%;
			margin: 0;
			margin-top: 5rem !important;
			margin-bottom: 4rem;
			padding: 5vh 5vw 12vh 5vw;
			margin-block: 0 5rem;
			padding-block: 1rem;
		}

		main::before {
			background-image: radial-gradient(at 0% 100%, hsla(170, 29%, 49%, 0.1) 0px, transparent 50%);
		}
	}

	@keyframes growGradient {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 0.5;
		}
	}
</style>
