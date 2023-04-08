<script>
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import Logo from '$lib/Other/logo.svelte';
	import VanishingHeader from './VanishingHeader.svelte';

	let loaded = false;
	onMount(() => (loaded = true));
</script>

{#if loaded}
	<VanishingHeader duration="350ms" offset={50} tolerance={5}>
		<header>
			<div class="logo">
				<a href="/" alt="logo" aria-label="logo"> <Logo /> </a>
			</div>

			<div class="search">
				<input type="text" name="search" placeholder="Try searching 'Why doesn't the search bar work?'" />
				<button title="Search"><Icon icon="bx:search" /></button>
			</div>

			<a title="Write an article (ADMIN only)" class="new-post" href="https://notyasho.sanity.studio/" target="_">
				<Icon icon="bx:pencil" />
			</a>
		</header>
	</VanishingHeader>
{/if}

<style lang="scss">
	header {
		height: 4.2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;

		margin-left: 4.5rem;
		padding-inline: 1.5rem 2rem;
		z-index: 100;

		background-color: $clr-dark-3;
	}

	.logo {
		:global(svg) {
			margin-top: 2rem;
			width: 12.5rem;
		}

		&:hover {
			filter: brightness(1.3);
		}

		transition: all 150ms;
	}

	a {
		text-decoration: none;
	}

	header .search {
		width: calc(100% - 20rem);
		z-index: 103;

		input {
			width: 70%;
			height: 2.3rem;
			padding: 1em;

			outline: none;
			border: 1.8px solid transparent;
			border-radius: 0.5vmax;
			font-family: $body-font;
			color: $clr-text-4;
			background: $clr-dark-2;

			transition: 0.2s;

			&:hover {
				filter: brightness(1.1);
			}

			&:focus {
				border-bottom: 1px solid $clr-accent-2;
				box-shadow: 0 0 1px $clr-dark-4;
			}
		}

		input::placeholder {
			color: $clr-text-4;
			opacity: 0.2;
		}

		button {
			width: 2.3rem;
			height: 2.3rem;
			position: relative;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			border-radius: 0.3rem;
			top: 0.1rem;

			color: $clr-text-450;
			background: $clr-dark-2;
			cursor: pointer;
			filter: brightness(1.1);

			transition: 0.2s ease-in-out;

			&:hover {
				filter: brightness(1.2);
			}

			:global(svg) {
				transition: 0.2s ease;
			}
		}
	}

	.search input:focus {
		button {
			color: $clr-text-2;
			background: $clr-accent-2;
		}

		&::placeholder {
			opacity: 0.4;
		}
	}

	.new-post {
		width: 2rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;

		border-radius: 0.6rem;
		background: $clr-dark-1;
		transition: all 0.3s ease-in-out;

		color: $clr-text-3;

		:global(svg) {
			height: 1rem;
			width: 1rem;
			line-height: 1rem;
		}
		&:hover {
			background: $clr-accent-2;
			box-shadow: -2px 12px 123px 4px $clr-accent-2;
		}
	}

	@media only screen and (max-width: $tablet) {
		header {
			background: $clr-dark-3-glass;
			backdrop-filter: blur(10px);
			margin: 0;
			justify-content: center;
			border-bottom: 1px solid $clr-dark-1;
		}

		header .new-post,
		header .search {
			display: none;
		}
	}
</style>
