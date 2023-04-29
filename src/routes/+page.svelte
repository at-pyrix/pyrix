<script>
	import Nav from '$lib/portfolio/Nav.svelte';
	import Hero from '$lib/portfolio/Hero.svelte';
	import MyStory from '$lib/portfolio/MyStory.svelte';
	import Cursor from '$lib/portfolio/Cursor.svelte';
</script>

<svelte:head>
	<title>Portfolio | NotYasho</title>
	<meta name="title" content="Portfolio | NotYasho" />
	<meta
		name="description"
		content="Hi! This is my portfolio site as a (emerging) software developer :P. Explore my projects, experience, and blog posts to learn more."
	/>
	<meta
		name="image"
		content="https://raw.githubusercontent.com/NotYasho/notyasho.netlify.app/master/static/img/thumbnails/portfolio.png"
		class="next-head"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://notyasho.netlify.app/" />
	<meta property="og:title" content="NotYasho - Portfolio" />
	<meta
		property="og:description"
		content="Hi! This is my portfolio site as a (emerging) software developer :P. Explore my projects, experience, and blog posts to learn more."
	/>
	<meta property="og:image" content="https://raw.githubusercontent.com/NotYasho/notyasho.netlify.app/master/static/img/thumbnails/portfolio.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://notyasho.netlify.app/" />
	<meta property="twitter:title" content="NotYasho - Portfolio" />
	<meta
		property="twitter:description"
		content="Hi! This is my portfolio site as a (emerging) software developer :P. Explore my projects, experience, and blog posts to learn more."
	/>
	<meta
		property="twitter:image"
		content="https://raw.githubusercontent.com/NotYasho/notyasho.netlify.app/master/static/img/thumbnails/portfolio.png"
	/>
</svelte:head>

<p>placeholder</p>
<main>
	<Cursor />
	<Hero><Nav /></Hero>
</main>

<style lang="scss">
	main {
		max-width: 100%;
		margin: 0 auto;

		:global(section) {
			padding: 0px 10vw;
		}
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
		background-image: radial-gradient(at 45% 100%, rgba(103, 108, 201, 0.2) 0px, transparent 50%);
	}

	main::after {
		right: 0;
		top: 0;
		background-image: radial-gradient(at 100% 15%, rgba(103, 108, 201, 0.3) 0px, transparent 50%);
	}

	p {
		display: none;
		font-family: 'Nofex', sans-serif;
	}
</style>
