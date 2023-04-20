<script>
</script>

<section id="hero" data-scroll-section>
	<slot />
	<div class="hero__content" data-scroll>
		<p>This portfolio will be updated once I get time to work on it. More information <a href="/about">here</a>.</p>
		
		<a class="btn btn-secondary" href="/blogs">READ THE BLOG</a>
	</div>
</section>

<style lang="scss">
	#hero {
		min-height: 100vh;
		background-color: rgb(28, 25, 38);
		background-image: linear-gradient(rgba(28, 25, 38, 0.6), rgba(28, 25, 38, 0.3), rgba(28, 25, 38, 0.4)),
			url('https://raw.githubusercontent.com/NotYasho/personal-portfolio/master/static/img/bg/hero-bg.webp?token=GHSAT0AAAAAAB4WNDHPMZIMCG6JWFF4P3GCY6ABK4Q');
		background-size: cover;
		background-position: center;
	}

	.hero__content {
		width: 100%;
		height: 100%;
		overflow: hidden;
		margin-top: 7vh;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
	}

	p {
		display: block;
	}
</style>
