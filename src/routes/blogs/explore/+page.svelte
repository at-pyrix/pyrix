<script>
	import { fly } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	export let data;
</script>

<svelte:head>
	<title>Explore - NotYasho</title>
</svelte:head>

<main in:fly={{ y: 10, duration: 500 }}>
	<section>
		<div class="grid">
			<div class="header card-item">
				<h1>Explore Categories</h1>
				<p>Explore the categories of blogs</p>
			</div>
			{#each data.categories as category}
				<div
					class="category card-item"
					style="background: url('{category.image.asset.url + '?w=50&fm=webp&blur=100'}');background-position: center;
				background-size: cover;
				background-repeat: no-repeat;"
				>
					<a href="/blogs/explore/{category.name}">
						<div class="overlay" style="background-color: rgba({category.color}, .8);">
							<Icon icon={category.icon} />
							<h2>{category.name}</h2>
							<span class="count">{category.count} posts</span>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</section>
</main>

<style lang="scss">
	.grid {
		margin: 0 auto 50px auto;
		height: 90vh;
		display: grid;
		grid-auto-columns: 1fr;
		gap: 1em;
		grid-template-areas:
			'one two three'
			'four five three'
			'four five three'
			'four six six'
			'seven seven eight'
			'nine ten eight'
			'eleven eleven eight';
	}

	.card-item {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		border-radius: 1rem;
		min-height: 20rem;
		height: auto;
		padding: 1rem;

		&:hover {
			cursor: pointer;
			border-radius: 0.5rem;
			transition: all 0.2s ease-in-out;
		}
	}

	.card-item:nth-child(1) {
		grid-area: one;
	}
	.card-item:nth-child(2) {
		grid-area: two;
	}

	.card-item:nth-child(3) {
		grid-area: three;
	}

	.card-item:nth-child(4) {
		grid-area: four;
	}

	.card-item:nth-child(5) {
		grid-area: five;
	}

	.card-item:nth-child(6) {
		grid-area: six;
	}

	.card-item:nth-child(7) {
		grid-area: seven;
	}

	.card-item:nth-child(8) {
		grid-area: eight;
	}

	.card-item:nth-child(9) {
		grid-area: nine;
	}

	.card-item:nth-child(10) {
		grid-area: ten;
	}

	.card-item:nth-child(11) {
		grid-area: eleven;
	}

	.header {
		pointer-events: none;
		outline: 3px solid lighten($clr-dark-1, 5);
		outline-offset: -3px;
		background-color: lighten($clr-card, 15);
		text-align: center;
	}

	.category {
		position: relative;

		:global(svg) {
			font-size: 3rem;
		}

		h2 {
			font-size: 2rem;
			font-weight: 600;
			margin-block: 1rem 0;
		}

		h2,
		:global(svg),
		span {
			color: $clr-dark-1;
		}
	}

	.category .overlay {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 1rem;
		&:hover {
			filter: brightness(1.1);
			cursor: pointer;
			border-radius: 0.5rem;
			transition: border-radius 0.2s ease-in-out, filter 0.3s;
		}
	}

	@media screen and (max-width: $tablet) {
		.grid {
			grid-template-areas: 'one two three' 'four five six' 'seven eight nine' 'ten eleven eleven';
		}

		h2 {
			font-size: 1.5rem !important;
		}

		* {
			text-align: center;
		}

		.overlay :global(svg) {
			font-size: 2rem !important;
		}

		span {
			font-size: 0.8rem !important;
		}
	}

	@media screen and (max-width: 650px) {
		.grid {
			grid-template-areas: 'one two' 'three four' 'five six' 'seven eight' 'nine ten' 'eleven eleven';
		}
	}

	@media screen and (max-width: $mobile) {
		.grid {
			grid-template-areas:
				'one'
				'two'
				'three'
				'four'
				'five'
				'six'
				'seven'
				'eight'
				'nine'
				'ten'
				'eleven';
		}
	}
</style>
