<script>
	import { fly } from 'svelte/transition';
	import { useLazyImage as lazyImage } from 'svelte-lazy-image';
	import Icon from '@iconify/svelte';
	import Toast from '$lib/Other/toast.svelte';
	import { checkSaved, bookmark, share } from './actions';
	import { message, description, showToast, savedItems } from './actions';
	export let post;
	export let i;
	checkSaved(post.slug);
	if (post.tags) {
		post.tags = post.tags.slice(0, 2);
	}
</script>

{#if $showToast}
	<Toast message={$message} description={$description} show={$showToast} />
{/if}

<div class="card" in:fly={{ y: 10, duration: 300, delay: i * 200 + 200}} style={`--color: ${post.color}`}>
	<a href={post.url} class="article-link">
		<div class="card-image">
			<img
				data-src={post.coverImage}
				src={post.featuredImage.asset.metadata.lqip}
				alt="thumbnail"
				title={post.imageSrc}
				use:lazyImage={{ threshold: 0.5 }}
			/>
		</div>
	</a>
	<div class="card-content">
		<div class="card-header">
			<a category={post.category} class="category" title="Category" href="/blogs/explore/{post.category}" style="--color: {post.color}"
				><Icon icon={post.symbol} /><span>{post.category}</span></a
			>
			{#if post.ert}
				<span id="sep">•</span>
				<span class="ert">
					<Icon icon="bx:time" />
					<span title="Estimated reading time">{post.ert}</span>
				</span>
			{/if}
			{#if post.daysAgo}
				<span id="sep">•</span>
				<span class="date">
					<Icon icon="bx:calendar" />
					<span title="Date Published">{post.daysAgo}</span>
				</span>
			{/if}
		</div>
		<div class="card-info">
			<a href={post.url} class="article-link" data-sveltekit-preload-data="hover">
				<span class="card-title">{post.title}</span>
			</a>
			<p class="card-text">
				{post.description}
			</p>
			<!-- tags -->
			{#if post.tags}
				<div class="tags">
					{#each post.tags as tag}
						<div href="/blogs/explore/{tag}" class="tag-link" title="Tag" style="--color: {post.color}">
							<Icon icon="mdi:pound" /><span class="tag-name">{tag}</span>
						</div>
					{/each}
				</div>
			{/if}
			<div class="actions">
				<button class="save-btn" title="Save" on:click={bookmark(post.slug)}>
					<Icon icon="material-symbols:bookmark{$savedItems.includes(post.slug) ? '-remove-' : '-add-outline-'}rounded" />
				</button>
				<button title="Share" on:click={share(post.slug, post.title)} class="share-btn"><Icon icon="material-symbols:forward" /></button>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.card {
		position: relative;
		height: calc(100% + 2rem);
		max-width: 630px;
		background: $clr-card;
		border-radius: 1.5rem;
		transition: all 200ms ease-in-out, transform 100ms;
		padding: 0.7rem;

		.card-image {
			width: 100%;
			height: 13rem;
			overflow: hidden;
			border-radius: 1em;
			transition: all 200ms ease-in-out;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				object-position: center center !important;
				transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);

				@include hover {
					transform: scale(1.05);
				}
			}
		}

		.card-content {
			padding: 0 0.5rem 0.5rem 0.5rem;
		}

		.card-header {
			font-size: smaller;
			margin: 1rem 0 1rem 0;
			font-family: $ui-font;
			display: flex;
			gap: 1ch;
			align-items: center;
			flex-direction: row;
		}

		.card-info {
			a {
				text-decoration: none;
				transition: 0.2s;
				@include hover {
					filter: brightness(0.9);
				}
			}

			.card-title {
				font-size: 1.2rem;
				color: $clr-fg-2;
				font-family: $title-secondary-font;
				font-weight: 500;
			}

			.card-text {
				margin-block: 0.7rem;
				font-size: small;
				line-height: 1.1rem;
				color: $clr-fg-4;
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 4;
				-webkit-box-orient: vertical;
			}

			.tags {
				position: absolute;
				bottom: 1rem;
				display: flex;
				flex-wrap: wrap;
				margin-top: 0.5rem;
				gap: 0.5rem;
				font-size: 0.8rem;
				font-family: $ui-font;
				font-weight: 500;
				color: $clr-fg-4;

				.tag-link {
					display: flex;
					align-items: center;
					gap: 0.2rem;
					color: $clr-fg-4;
					border-radius: 1rem;
					background: lighten($clr-card, 8%);
					padding: 0.2rem 0.5rem;

					transition: 0.2s;
				}

				.tag-name {
					font-size: 0.8rem;
					font-family: $ui-font;
					font-weight: 500;
					color: $clr-fg-4;
				}
			}

			.actions {
				position: absolute;
				right: 1rem;
				bottom: 1rem;

				.save-btn,
				.share-btn {
					all: unset;
					cursor: pointer;
					color: $clr-fg-3;
					:global(svg) {
						font-size: 1.3rem;
						background: rgba(var(--color), 0.1);
						border-radius: 0.6em;
						padding: 0.3em 0.3em;
						color: rgb(var(--color));
					}

					@include hover {
						:global(svg) {
							background: rgba(var(--color), 0.3);
						}
					}
				}

				:global(svg) {
					width: 100%;
					height: 100%;
					font-size: large;
					vertical-align: middle;
					transition: 0.2s;
				}
			}
		}

		@media (min-width: $tablet) {
			max-width: 420px;
		}

		@include hover {
			filter: brightness(1.1);
			// transform: translateY(-1%);
			box-shadow: 0px 4px 20px 5px transparentize($clr-bg-450, 0.8);

			.card-image {
				filter: brightness(0.9);
			}
		}
	}

	@media screen and (max-width: $tablet) {
		.card-content {
			.category {
				padding: 0;
				background: none;
			}
		}
	}

	@media screen and (max-width: $mobile) {
		.card {
			padding: 0.5rem;
			background: none;
		}

		.card-image {
			height: auto !important;
			margin-inline: calc(-50vw + 50%);
			width: 100vw !important;
			border-radius: 0 !important;
			height: auto !important;
			max-height: 18rem;
		}
	}
</style>
