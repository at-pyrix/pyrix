<script>
	export let posts;
	import Featured from '$lib/blogs/Featured.svelte';
</script>

<section class="carousel">
	{#each posts as post}
		<div class="carousel-item" style="--avg-color: {post.color}">
			<Featured {post} />
		</div>
	{/each}
</section>

<style lang="scss">

	.carousel-item {
		width: 100%;
		flex-shrink: 0;
	}

	.carousel-item:hover {
		&::after {
			opacity: 0.1;
		}
	}

	.carousel-item::after {
		right: 0;
		top: 0;
		content: '';
		width: 100%;
		position: absolute;
		pointer-events: none;
		height: 50vh;
		opacity: 0;
		z-index: 101;
		transition: 0.4s;
		background-image: linear-gradient(180deg, rgba(var(--avg-color), 1) 0%, rgba(2, 0, 36, 0) 100%);

		@media only screen and (max-width: $mobile) {
			opacity: 0.1;
		}
	}
</style>
