<script>
</script>

<section id="hero" data-scroll-section>
	<slot />
	<div class="hero__content" data-scroll>
		<div class="content__image">
			<div class="bubble">This is the Alpha version, expect bugs.</div>
			<img
				src="https://raw.githubusercontent.com/NotYasho/personal-portfolio/master/static/img/svg/avatar.svg?token=GHSAT0AAAAAAB4WNDHPQMEMV55X33ZXTU52Y6ABKIQ"
				alt="avatar"
			/>
		</div>
		<div class="content__text">
			<h1><span>Heyo,</span> I'm</h1>
			<img
				src="https://raw.githubusercontent.com/NotYasho/personal-portfolio/master/static/img/svg/hero-text.svg?token=GHSAT0AAAAAAB4WNDHPSUIVTWCFJK5BHOSOY6ABKQQ"
				alt="hero text"
			/>
			<p>
				<s>
					I'm a self-proclaimed developer and designer. Currently working with JS, Python and a bit of Java. Besides that, I really like reading
					books, sketching and listening to <span class="last-word">music...</span></s
				>
			</p>
			<p>This portfolio will be updated soon.</p>
		</div>
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
	}

	.content__text {
		position: absolute;
		overflow: hidden;
		float: left;
	}

	.content__text {
		max-width: 18rem;
		margin-top: 8.5vh;

		h1 {
			font-family: 'JetBrainsMono', monospace;
			color: #d0d0d0;
			font-size: 1.8rem;
			font-weight: 400;
			text-align: center;
			padding-right: 7.6rem;
			margin-bottom: 1.5vh;
		}

		span {
			margin-top: 0.5rem;
			color: transparent;
			background: linear-gradient(rgb(217, 255, 0), rgb(179, 255, 0));
			-webkit-background-clip: text;
			background-clip: text;
		}

		img {
			pointer-events: none;
			user-select: none;
			width: 12rem;
			height: auto;
		}

		p {
			margin-block: 1rem;
			font-family: 'Proxima Nova', sans-serif;
			color: #adacd3;
		}
	}

	p .last-word {
		color: transparent;
		background: linear-gradient(to right, #adacd3, rgba(255, 255, 255, 0.3));
		-webkit-background-clip: text;
		background-clip: text;
	}

	.content__image {
		position: relative;
		user-select: none;
		overflow: hidden;
		float: right;

		img {
			width: 20rem;
		}

		@include hover {
			.bubble {
				bottom: 60%;
				opacity: 0.9;
			}
		}
	}

	.bubble {
		position: absolute;
		opacity: 0;
		bottom: 55%;
		right: 50%;
		background: $clr-bg-1;
		border-radius: 2rem;
		padding: 1.5rem;
		text-align: center;
		color: $clr-fg-3;
		transition: 0.2s ease-out;
		transition-delay: 0.3s;

		&:before {
			content: '';
			position: absolute;
			border-right: 1.5rem solid $clr-bg-1;
			border-left: 0.75rem solid transparent;
			border-top: 0.75rem solid $clr-bg-1;
			border-bottom: 20px solid transparent;
			right: 2rem;
			bottom: -1.5rem;
		}
	}

	@media screen and (max-width: $tablet) {
		.hero__content {
			margin-top: 2vh;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
			grid-template-areas: 'up' 'down';
			grid-gap: 1vh;
			margin: 2vh 0 0 0;
		}

		.content__image {
			grid-area: up;
			border-radius: 0 50% 50% 50%;
			text-align: center;
			height: 100%;
			overflow: hidden;
			z-index: 0;
		}

		.content__image img {
			margin-inline: auto;
			width: 90%;
			max-width: 300px;
			min-width: 250px;
			height: 100%;
		}

		.content__text {
			grid-area: down;
			text-align: center;
			height: 100%;
			overflow: hidden;
			position: relative;
			max-width: 100%;
			margin-top: 5%;
		}

		.content__text img {
			width: 50vw;
			margin-inline: auto;
			min-width: 9rem;
			max-width: 10rem;
		}

		.content__text h1 {
			font-size: 1.45rem;
			margin-bottom: 1.5vh;
			padding-right: 0.7em;
		}

		.content__text p {
			max-width: 56%;
			min-width: 45%;
			margin-left: auto;
			margin-right: auto;
			hyphens: auto;
		}
	}

	@media (max-width: $mobile) {
		.content__text p {
			text-align: justify;
			text-justify: newspaper;
		}
	}
</style>
