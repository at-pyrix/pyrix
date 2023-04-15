<script>
	import Icon from '@iconify/svelte';
	import Logo from '$lib/Other/logo.svelte';
	import { goto } from '$app/navigation';
	import VanishingHeader from './VanishingHeader.svelte';
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'Escape') {
			document.querySelector('input').blur();
		}
		if (e.key === '/') {
			e.preventDefault();
			document.querySelector('input').focus();
		}
	}}
/>

<VanishingHeader duration="350ms" offset={50} tolerance={5}>
	<header>
		<div class="logo">
			<a href="/" alt="logo" aria-label="logo"> <Logo /> </a>
		</div>

		<div class="search">
			<form on:submit|preventDefault={(e) => goto(`/blogs/search?q=${e.target.search.value}`)}>
				<input type="text" name="search" placeholder="Try searching 'Why doesn't the search bar work?'" />
				<button title="Search"><Icon icon="bx:search" /></button>
			</form>
		</div>

		<a title="Source Code" class="github" href="https://www.github.com/NotYasho/NotYasho/" target="_">
			<Icon icon="fa:github" />
		</a>
	</header>
</VanishingHeader>

<style lang="scss">
	header {
		height: 4.2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;

		margin-left: 4.5rem;
		padding-inline: 1.5rem 2rem;
		z-index: 100;

		background-color: $clr-bg-3;
	}

	.logo {
		:global(svg) {
			margin-top: 2rem;
			width: 12.5rem;
		}
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
			color: $clr-fg-4;
			background: $clr-bg-2;

			transition: 0.2s;

			@include hover {
				filter: brightness(1.1);
			}

			&:focus {
				border-bottom: 1px solid $accent-2;
				box-shadow: 0 0 1px $clr-bg-4;
			}
		}

		input::placeholder {
			color: $clr-fg-4;
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

			color: $clr-fg-450;
			background: $clr-bg-2;
			cursor: pointer;
			filter: brightness(1.1);

			transition: 0.2s ease-in-out;

			@include hover {
				filter: brightness(1.2);
			}

			:global(svg) {
				transition: 0.2s ease;
			}
		}
	}

	.search input:focus {
		button {
			color: $clr-fg-2;
			background: $accent-2;
		}

		&::placeholder {
			opacity: 0.4;
		}
	}

	.github {
		width: 2rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;

		border-radius: 0.6rem;
		background: $clr-bg-1;
		transition: all 0.3s ease-in-out;

		color: $clr-fg-350;

		:global(svg) {
			height: 1rem;
			width: 1rem;
		}
		@include hover {
			background: $accent-2;
			color: $clr-fg-3;
			box-shadow: -2px 12px 123px 4px $accent-2;
		}
	}

	@media only screen and (max-width: $tablet) {
		header {
			background: $clr-bg-3-glass;
			backdrop-filter: blur(10px);
			margin: 0;
			justify-content: center;
			border-bottom: 1px solid $clr-bg-1;
		}

		header .github,
		header .search {
			display: none;
		}
	}
</style>
