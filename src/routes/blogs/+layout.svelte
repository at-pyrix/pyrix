<script>
	import Nav from '$lib/blogs/Nav.svelte';
	import Header from '$lib/blogs/Header.svelte';
	import Footer from '$lib/blogs/Footer.svelte';
	import '$lib/styles/markdown.scss'
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Blogs | NotYasho</title>
	<meta name="title" content="Blogs | NotYasho" />
	<meta
		name="description"
		content="Explore all sorts of blogs written by me, be it on programming, graphic design, productivity etc. This my official blog page for my website."
	/>
	<meta name="image" content="https://raw.githubusercontent.com/NotYasho/notyasho.netlify.app/master/static/img/thumbnails/blogs.png">

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

<Header />
<Nav />
<main>
	<slot />
</main>
<Footer />

<style lang="scss">
	main {
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
</style>
