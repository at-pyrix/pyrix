<script>
	import Nav from '$lib/blogs/Nav.svelte';
	import Header from '$lib/blogs/Header.svelte';
	import 'highlight.js/styles/night-owl.css';
	import '../../styles/markdown.scss';
	import Footer from '$lib/blogs/Footer.svelte';
</script>

<Header />
<Nav />
<main>
	<slot />
</main>
<Footer />

<style lang="scss">
	main {
		max-width: 100%;
		padding: 1.4rem 1rem;
		margin-left: 4.8rem;
		margin-block: 2.2rem;
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
		background-image: radial-gradient(at 45% 100%, hsla(257, 100%, 75%, 0.2) 0px, transparent 50%);
	}

	main::after {
		right: 0;
		top: 0;
		background-image: radial-gradient(at 100% 45%, hsla(257, 100%, 75%, 0.2) 0px, transparent 50%);
	}

	@keyframes growGradient {
		0% {
			opacity: 0.2;
		}
		100% {
			opacity: 0.5;
		}
	}

	@media only screen and (max-width: $tablet) {
		main::after {
			background-image: radial-gradient(at 100% 45%, hsla(257, 100%, 75%, 0.1) 0px, transparent 50%);
		}
		main::before {
			background-image: radial-gradient(at 30% 100%, hsla(257, 100%, 75%, 0.1) 0px, transparent 50%);
		}

		main {
			width: 100%;
			margin: 0;
			margin-bottom: 2.2rem;
			padding: 5vh 3vw 12vh 3vw;
		}
	}
</style>
