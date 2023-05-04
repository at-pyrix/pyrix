<script>
	import Icon from '@iconify/svelte';
	import Logo from '$lib/Other/logo.svelte';
	import { goto } from '$app/navigation';
	import VanishingHeader from './VanishingHeader.svelte';

	let width;
	let open;

	function clearSearch() {
		document.querySelector('.search input').value = '';
		document.querySelector('header').classList.remove('open');
		open = false;
	}

	function searchMobile(e) {
		if (width < 768) {
			if (open) {
				document.querySelector('.search input').blur();
				open = false;
				return;
			} else {
				e.preventDefault();
				open = true;
				document.querySelector('.search input').focus();
			}
		}
	}
</script>

<svelte:window
	bind:innerWidth={width}
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
	<header class:open>
		<div class="logo">
			<Logo />
		</div>

		<div class="search" on:blur={() => (open = false)}>
			<form on:submit|preventDefault={(e) => goto(`/blogs/search?q=${e.target.search.value}`)}>
				<back-btn on:click|preventDefault={clearSearch} on:keydown={() => 0}>
					<Icon icon="bx:arrow-back" />
				</back-btn>
				<input type="search" name="search" placeholder="Try searching 'Why doesn't the search bar work?'" on:blur={(open = false)} />
				<button title="Search" class="search-btn" action="submit" on:click={searchMobile}><Icon icon="bx:search" /></button>
			</form>
		</div>

		<a title="Source Code" class="github" href="https://www.github.com/NotYasho/NotYasho/" target="_">
			<Icon icon="fa:github" />
		</a>
	</header>
</VanishingHeader>

<style lang="scss">
	.search-btn :global(svg),
	back-btn :global(svg) {
		pointer-events: none;
	}
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
		transition: width 0.2s ease-in-out;

		&:focus-within {
			.search-btn:hover {
				background: $accent-2;
				color: $clr-fg-3;
			}
		}

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

		.search-btn {
			display: inline-flex;
		}

		.search-btn,
		back-btn {
			width: 2.3rem;
			height: 2.3rem;
			position: relative;
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
		.search-btn,
		back-btn {
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

	back-btn {
		display: none;
	}

	@media only screen and (max-width: $tablet) {
		.logo {
			margin-right: auto;
		}

		header {
			background: $clr-bg-3-glass;
			backdrop-filter: blur(10px);
			margin: 0;
			border-bottom: 1px solid $clr-bg-1;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			padding-inline: 5vw;
			gap: 0.5rem;
		}

		.search {
			width: min-content !important;
			margin: 0;
			padding: 0;
		}

		header .search {
			input {
				display: none;
			}

			.search-btn {
				border-radius: 100%;
				background: none;
				font-size: 1.2rem;
				display: flex;
				transition: background 0.2s;
				

				@include hover {
					background: $clr-card;
				}
			}

			.search-btn {
				color: $clr-fg-4;
			}
		}

		header.open {
			background: $clr-bg-3;
			justify-content: space-between;

			.logo, .github {
				display: none;
			}

			.search {
				width: calc(100% - 10vw) !important;
				input {
					display: block;
				}
			}
			.search {
				back-btn {
					display: inline-flex;
					position: absolute;
					left: 3vw;
					top: 1rem;
					border-radius: 100%;
					background: none !important;
					font-size: 1.2rem;
				}

				input {
					position: absolute;
					top: 1rem;
					
					
					left: calc(5vw + 10%);
					width: calc(80% - 10vw);
				}
				.search-btn,
				back-btn {
					border-radius: 0.3rem;
				}

				.search-btn {
					margin-left: 102%;

					
					right: 0;

					@include hover {
						background: $clr-bg-2;
						color: $clr-fg-4;
					}
				}
			}
		}
	}

	@media only screen and (max-width: $mobile) {
		header .github {
			display: none;
		}
	}
</style>
