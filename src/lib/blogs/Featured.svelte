<script>
	import Toast from '$lib/Other/toast.svelte';
	import { useLazyImage as lazyImage } from 'svelte-lazy-image';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import { checkSaved, bookmark, share } from './actions';
	import { message, description, showToast, savedItems } from './actions';
	export let post;
	let innerWidth;

	checkSaved(post.slug);
</script>

{#if $showToast}
	<Toast message={$message} description={$description} show={$showToast} />
{/if}

<svelte:window bind:innerWidth />

<section class="featured" style="--color: {post.color}" in:fly={{ y: 10, duration: 500 }}>
	<div class="featured-wrapper">
		<div class="image">
			<img
				class="img"
				src={post.featuredImage.asset.metadata.lqip}
				data-src={post.coverImage}
				alt="thumbnail"
				title={post.imageSrc}
				use:lazyImage={{ threshold: 0 }}
			/>
		</div>
		<div class="text-block">
			<div class="info">
				<a title="Category" class="category" category={post.category} href="/blogs/explore/{post.category}">
					<Icon icon={post.symbol} /><span>{post.category}</span></a
				>
				<span id="sep">•</span>
				<span class="ert">
					<span title="Estimated Read Time">{post.ert}</span>
				</span>
				<span class="featured-badge shine featured-text">
					<Icon icon="bxs:star" />
					<span>FEATURED</span>
				</span>
			</div>

			<a id="title" href={post.url} data-sveltekit-preload-data="hover">
				<h2>{post.title}</h2>
			</a>
			<p class="description">
				{post.description}
			</p>
			<div class="actions-bottom">
				<div class="author">
					<div class="left">
						<img src="/img/sample/pfp1.png" alt="author" id="author-pfp" />
					</div>
					<div class="right">
						<div class="half-container">
							<span id="author-name">NotYasho</span>
						</div>
						<div class="half-container">
							<span id="date-published">{post.daysAgo}</span>
						</div>
					</div>
				</div>

				<!-- Hide the button when the screen is small -->
				{#if innerWidth > 1070}
					<span class="read-article">
						<button class="btn c2a" onclick="location.href='{post.url}';">
							{#if innerWidth > 1300}Read article{:else}Read{/if}
						</button>
					</span>
				{/if}

				<div class="actions">
					<button id="save" title="Save Article" on:click={bookmark(post.slug)}
						><Icon icon="material-symbols:bookmark{$savedItems.includes(post.slug) ? '-remove-' : '-add-outline-'}rounded" /></button
					>
					<button title="Share" on:click={share(post.slug, post.title)} id="share"><Icon icon="material-symbols:forward" /></button>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	h2 {
		font-family: $title-font;
		line-height: 2.5rem;
	}

	p {
		line-height: 2.5ch;
		font-weight: 400;
		font-family: $body-font;
	}

	.featured {
		width: 100%;
		position: relative;
		padding: 1.5rem;
		border-radius: 1rem;
		margin-bottom: 2rem;
		background: lighten($clr-card, 1);
	}
	.info {
		display: flex;
		gap: 0.7ch;
		align-items: center;
	}

	span.featured-badge {
		position: absolute;
		right: 0.6rem;
		gap: 0.5ch;
		display: inline-flex;
		align-items: center;
		border-radius: 0.3rem;
		padding: 0 0.64rem;
		background: rgba(var(--color));
		pointer-events: none;
		color: $clr-bg-4;

		span {
			font-weight: 600;
		}

		@media only screen and (max-width: 1000px) {
			padding: 0.3rem;
			border-radius: 100%;
			span {
				display: none;
			}

			:global(svg) {
				width: 1rem;
				height: auto;
			}
		}

		@media only screen and (max-width: $tablet) {
			background: none;
			border-radius: 0;
			margin-right: 2rem;
			padding: 0;
			span {
				display: inline;
			}
		}
	}

	.featured-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
	}

	.featured #title {
		text-decoration: none;
		transition: filter 0.3s ease;

		h2 {
			font-weight: 500;
			font-size: clamp(1.6rem, 2.5vw, 4rem);
			width: 85%;
			margin-bottom: 0.8rem;

			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}

		@include hover {
			filter: brightness(0.9);
		}
	}

	.featured .image {
		width: 63%;
		height: 25rem;
		position: relative;
		margin-right: 3em;
		overflow: hidden;

		border-radius: 2em;
	}

	.image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease-in-out;

		@include hover {
			transform: scale(1.05);
		}
	}

	.text-block {
		margin-top: 0.2rem;
		position: relative;
		width: 50%;
	}

	.text-block h2 {
		margin-top: 1.6rem;
		color: $clr-fg-2;
	}

	p.description {
		margin-block: 1.5rem;
		font-family: $title-secondary-font;
		font-size: clamp(0.8rem, 1.9vw, 1.1rem);
		color: $clr-text;

		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;

		@media only screen and (max-width: 1000px) {
			-webkit-line-clamp: 4 !important;
		}
	}

	.actions-bottom {
		width: 100%;
		position: absolute;
		inset: 0;
		top: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.author {
			display: flex;
		}

		.left {
			border: 3px solid rgba(var(--color), 0.1);
			border-radius: 100%;
			margin-right: 0.5rem;

			img {
				border-radius: 100%;
				width: 3.3rem;
				height: 3.3rem;
			}
		}

		.right {
			margin: auto 0;
		}

		.half-container {
			width: 5.5rem;
			line-height: 1.1rem;

			#author-name {
				color: $clr-fg-3;
				font-weight: 500;
			}

			#date-published {
				font-size: 0.9rem;
				color: $clr-fg-4;
			}
		}
	}

	.actions {
		button {
			all: unset;
			cursor: pointer;
			color: $clr-fg-3;

			@include hover {
				:global(svg) {
					background: rgba(var(--color), 0.1);
					color: rgba(var(--color), 1);
				}
			}

			:global(svg) {
				border-radius: 0.8rem;
				padding: 0.3em 0.3em;
			}
		}

		:global(svg) {
			width: 100%;
			height: 100%;
			font-size: 1.6em;
			vertical-align: middle;
			transition: 0.2s;
		}
	}

	.btn {
		background: rgba(var(--color), 0.1);
		outline: 0.2px solid rgb(var(--color));
	}

	.btn:hover {
		background: rgb(var(--color));
		color: $clr-bg-4;
	}

	@media only screen and (max-width: $tablet) {
		.featured {
			width: 100%;
			border: 0;
			padding: 0;

			&::after {
				display: none;
			}

			&:before {
				z-index: 1;
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				border-radius: 1rem;
				background: rgba(var(--color), 0.5);
			}
		}

		.category {
			background: none;
		}

		.featured-badge {
			margin-top: 0.3ch;
			span {
				display: none !important;
			}
		}

		.featured-wrapper {
			height: 22rem;
			position: relative;

			.image {
				border-radius: 1rem;
				position: absolute;
				width: 100%;
				height: 100%;
				img {
					filter: blur(10px) grayscale(0.3) brightness(0.3);
				}
			}

			.text-block {
				z-index: 2;
				top: 2rem;
				width: 100%;
				color: $clr-fg-4;
				min-width: 10rem;
				padding: 0 3rem 0 2rem;
				padding-right: min(3vw, 3rem);
				font-size: clamp(0.7rem, 3vmin, 0.8rem);

				.author {
					display: none;
				}
			}

			h2 {
				width: 90%;
				margin-block: 1rem 0.5rem;
				line-height: 2rem;
				font-family: $title-font;
				font-weight: bolder !important;
				color: $clr-fg-2;
				font-size: clamp(2em, 1.5em, 5%);
			}

			.description {
				margin-top: 1rem;
				width: 90%;
				line-height: 20px;
				word-break: break-all;
				height: 11ch !important;
				color: rgba(255, 255, 255, 0.7);
			}

			.info {
				a,
				span,
				:global(svg) {
					color: rgba(255, 255, 255, 0.8);
					padding: 0;
					font-size: 0.9rem;
				}

				#sep {
					color: rgba(255, 255, 255, 0.3);
				}
			}
		}

		.actions :global(svg) {
			font-size: x-large;
			background: rgba(var(--color), 0.2);
		}

		.actions-bottom {
			position: absolute;
			justify-content: right;
			margin-left: -2rem;
			bottom: 3rem;
			.actions {
				button {
					border: 1px solid rgba(255, 255, 255, 0.3);
					border-radius: 100%;
					margin-inline: 0.2rem;
				}
			}
		}
	}

	@media only screen and (max-width: $mobile) {
		h2 {
			font-size: smaller;
		}
		.description {
			height: 33% !important;
		}
	}
</style>
