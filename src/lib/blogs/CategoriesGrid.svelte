<script>
	import Category from './Category.svelte';
	export let categories;
</script>

<div class="grid">
	{#each categories as category, i}
		<Category {category} {i} />
	{/each}
	<div class="category">
		<a href="/blogs/explore/"
			><Category
				category={{
					name: 'Browse More',
					icon: 'material-symbols:chevron-right',
					dummy: true
				}}
				i={2}
			/></a
		>
	</div>
</div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-column-gap: 1rem;
		grid-auto-flow: column;
		overflow-x: scroll;
		scrollbar-width: none;
		max-width: 90vw;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	@media only screen and (max-width: 420px) {
		.category {
			background: none;
		}
	}
</style>
