<script>
	import { fly } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	export let data;
</script>

<svelte:head>
	<title>Explore - NotYasho</title>
</svelte:head>

<div class="grid">
	<div class="header card-item" style="grid-area: item-1;">
		<h1>Explore Categories</h1>
		<p>Explore the categories of blogs</p>
	</div>
	{#each data.categories as category, i}
		<div in:fly={{ y: 100, duration: 300, delay: i * 100 }} class="category card-item" style="grid-area: {'item-' + (i + 2)};">
			<a href="/blogs/explore/{category.name}">
				<div class="overlay" style="background-color: rgba({category.color}, 1);">
					<Icon icon={category.icon} />
					<h2>{category.name}</h2>
					<span class="count">{category.count} posts</span>
				</div>
			</a>
		</div>
	{/each}
</div>

<style lang="scss">
	.grid {
		height: 100%;
		display: grid;
		grid-auto-columns: 1fr;
		gap: 1em;
		grid-template-areas:
			'item-1 item-2 item-3'
			'item-4 item-5 item-3'
			'item-4 item-5 item-3'
			'item-4 item-6 item-6'
			'item-7 item-7 item-8'
			'item-9 item-10 item-8'
			'item-11 item-11 item-8';
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

		@include hover {
			cursor: pointer;
			border-radius: 0.5rem;
			transition: all 0.2s ease-in-out;
		}
	}

	.header {
		pointer-events: none;
		outline: 3px solid lighten($clr-bg-1, 5);
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
			color: $clr-bg-1;
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
		transition: border-radius 0.2s ease-in-out, filter 0.3s;

		@include hover {
			filter: brightness(1.1);
			cursor: pointer;
			border-radius: 0.5rem;
		}
	}

	@media screen and (max-width: $tablet) {
		.grid {
			grid-template-areas:
				'item-1 item-2 item-3'
				'item-4 item-5 item-6'
				'item-7 item-8 item-9'
				'item-10 item-11 item-11';
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
			grid-template-areas:
				'item-1 item-2'
				'item-3 item-4'
				'item-5 item-6'
				'item-7 item-8'
				'item-9 item-10'
				'item-11 item-11';
		}
	}

	@media screen and (max-width: $mobile) {
		.grid {
			grid-template-areas:
				'item-1'
				'item-2'
				'item-3'
				'item-4'
				'item-5'
				'item-6'
				'item-7'
				'item-8'
				'item-9'
				'item-10'
				'item-11';
		}
	}
</style>
