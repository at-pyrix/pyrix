<script>
	import Nav from '$lib/blogs/Nav.svelte';
	import Header from '$lib/blogs/Header.svelte';
	import '../../styles/markdown.scss';
	import { fade } from 'svelte/transition';
	import Footer from '$lib/blogs/Footer.svelte';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Contact | NotYasho</title>
	<meta name="title" content="Contact | NotYasho" />
	<meta
		name="description"
		content="Official contact page for my website. Contact me through this contact form. (writing these long-ass descriptions is such a pain)"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://notyasho.netlify.app/contact" />
	<meta property="og:title" content="Contact | NotYasho" />
	<meta
		property="og:description"
		content="Official contact page for my website. Contact me through this contact form. (writing these long-ass descriptions is such a pain)"
	/>
	<meta
		property="og:image"
		content="https://raw.githubusercontent.com/NotYasho/notyasho.netlify.app/master/static/img/thumbnails/contact.png"
	/>

	<!-- Twitter -->
	<meta
		property="twitter:card"
		content="https://raw.githubusercontent.com/NotYasho/notyasho.netlify.app/master/static/img/thumbnails/contact.png"
	/>
	<meta property="twitter:url" content="https://notyasho.netlify.app/contact" />
	<meta property="twitter:title" content="Contact | NotYasho" />
	<meta
		property="twitter:description"
		content="Official contact page for my website. Contact me through this contact form. (writing these long-ass descriptions is such a pain)"
	/>
	<meta
		property="twitter:image"
		content="https://raw.githubusercontent.com/NotYasho/notyasho.netlify.app/master/static/img/thumbnails/contact.png"
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
		background-image: radial-gradient(at 45% 100%, hsla(266, 100%, 72%, 0.2) 0px, transparent 50%);
	}

	main::after {
		right: 0;
		top: 0;
		background-image: radial-gradient(at 100% 15%, hsla(247, 100%, 80%, 0.2) 0px, transparent 50%);
	}

	@media only screen and (max-width: $tablet) {
		main {
			width: 100%;
			margin: 0;
			margin-top: 4.2rem !important;
			margin-bottom: 4rem;
			padding: 5vh 5vw 12vh 5vw;
			margin-block: 0 5rem;
			padding-block: 1rem;
			height: 90vh;
		}

		main::before {
			background-image: radial-gradient(at 0% 100%, hsla(266, 100%, 72%, 0.1) 0px, transparent 50%);
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
