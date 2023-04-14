<script>
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import { useLazyImage as lazyImage } from 'svelte-lazy-image';
	export let category;
	export let i;
</script>

<div class="category-card" style="--color: rgb({category.color}); --rgb: {category.color}" in:fly={{ y: 10, duration: 500, delay: i * 50 + 200 }}>
	<a href={!category.dummy ? `/blogs/explore/${category.name}` : '/blogs/explore'}>
		<div class="square-card">
			{#if !category.dummy}
				<img class="bg-img" alt={category.name} data-src={category.coverImage} src={category.placeholderImage} use:lazyImage />
				<div class="title-category"><Icon icon={category.icon} /><br /></div>
			{:else}
				<div class="dummy" />
				<div class="title-category"><Icon icon={category.icon} /><br /></div>
			{/if}
		</div>

		{#if !category.dummy}
			<a href="/blogs/explore/{category.name}">
				<h2><span id="hashtag">#</span>{category.name}</h2>
			</a>
			<span id="count">{category.count == 1 ? `One post` : `Over ${category.count - 1}+ posts`}</span>
		{:else}
			<a href="/blogs/explore/{category.name}">
				<h2>{category.name}</h2>
			</a>
			<span id="count">Other categories</span>
		{/if}
	</a>
</div>

<style lang="scss">
	.category-card {
		background: $clr-card;
		padding: 1rem;
		position: relative;
		border-radius: 20px;
		text-align: center;

		a {
			all: unset;
			cursor: pointer;
			transition: all 200ms;
			color: $clr-fg-2;

			@include hover {
				filter: brightness(1.05);
			}

			&:active {
				filter: brightness(0.9);
			}
		}

		#count {
			font-size: small;
			color: $clr-fg-4;
		}

		h2 {
			font-size: large;
			margin-top: 1rem;
			font-family: $body-font;

			#hashtag {
				color: var(--color);
			}
		}
	}

	.square-card {
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 2rem;
		width: 9rem;
		height: 8rem;
		cursor: pointer;
		border-bottom: solid 0.5rem var(--color);

		&::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			opacity: 0.7;
			mix-blend-mode: lighten;
			z-index: 1;
			background-color: var(--color);
		}
		transition: box-shadow 150ms ease-out;
		box-shadow: 0px 0px 0px 0px rgba(var(--rgb), 0);

		@include hover {
			box-shadow: 0px 0px 90px 5px rgba(var(--rgb), 0.1);
		}
	}

	.square-card:has(.dummy) {
		background: $clr-bg-1;
	}

	.bg-img {
		position: absolute;
		height: 100%;
		width: 100%;
		object-fit: cover;
		filter: grayscale(1) brightness(0.7);
	}

	.title-category {
		position: absolute;
		font-weight: bolder;
		color: white;
		text-align: center;
		z-index: 1;
		:global(svg) {
			font-size: 3rem;
		}
	}

	@media only screen and (max-width: $mobile) {
		.category-card {
			background: none;
			padding: 0;
			margin: 0;

			h2 {
				position: absolute;
				bottom: 2.2rem;
				color: white;
				font-size: 1.3rem;
				left: 1.4rem;

				#hashtag {
					display: none;
				}
			}

			#count {
				position: absolute;
				bottom: 1.1rem;
				left: 1.4rem;
				color: white;
			}

			a {
				filter: none !important;
			}
		}

		.category-card:nth-last-child(2) {
			margin-right: -2rem;
		}

		.square-card {
			height: 13rem;
			width: 11rem;
			border: 0;
			box-shadow: none !important;

			&::after {
				position: absolute;
				background: linear-gradient(to top, var(--color), transparent);
				filter: blur(20px) brightness(0);
				border-radius: 5px;
				// background: radial-gradient(ellipse at center, transparent 0%, var(--color) 80%);
				content: '';
				height: 100%;
				width: 100%;
			}
		}

		.category-card:has(.dummy) {
			display: none;
		}
	}
</style>
