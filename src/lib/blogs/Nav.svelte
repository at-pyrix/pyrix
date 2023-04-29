<script>
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	let open = false;

	function handleSearch() {
		let search = document.querySelector('.search input');
		search.focus()
		search.closest('.vanishingHeader').classList.remove('hide')
		search.closest('.vanishingHeader').classList.add('show')
	}
</script>

<nav class="sidebar" class:open>
	<button title="Menu" class="link" id="hamb" on:click={() => (open = !open)}>
		{#if !open}
			<Icon icon="ic:round-menu" />
		{:else}
			<Icon icon="ic:round-close" />
		{/if}
	</button>
	<ul class="nav-list">
		<li id="home" class:active={$page.url.pathname === '/blogs'}>
			<a href="/blogs">
				<Icon icon={$page.url.pathname === '/blogs' ? 'bxs:home-smile' : 'bx:home-smile'} />
				<span>Home</span>
			</a>
		</li>
		<li id="search" class:active={$page.url.pathname.startsWith('/blogs/search')}>
			<a href="/blogs/search" on:click|preventDefault={handleSearch}>
				<Icon icon={$page.url.pathname.startsWith('/blogs/search') ? 'bxs:search' : 'bx:search'} />
				<span>Search</span>
			</a>
		</li>
		<li id="explore" class:active={$page.url.pathname.startsWith('/blogs/explore')}>
			<a href="/blogs/explore">
				<Icon icon={$page.url.pathname.startsWith('/blogs/explore') ? 'bxs:compass' : 'bx:compass'} />
				<span>Explore</span>
			</a>
		</li>
		<li id="saved" class:active={$page.url.pathname === '/blogs/saved'}>
			<a href="/blogs/saved">
				<Icon icon={$page.url.pathname === '/blogs/saved' ? 'mdi:bookmark-multiple' : 'mdi:bookmark-multiple-outline'} />
				<span>Saved</span>
			</a>
		</li>
		<li id="contact" class:active={$page.url.pathname === '/contact'}>
			<a href="/contact">
				<Icon icon={$page.url.pathname === '/contact' ? 'bxs:navigation' : 'bx:navigation'} />
				<span>Contact</span>
			</a>
		</li>
		<li id="about" class="link" class:active={$page.url.pathname === '/about'}>
			<a href="/about">
				<Icon icon={$page.url.pathname === '/about' ? 'material-symbols:info-rounded' : 'material-symbols:info-outline-rounded'} />
				<span>About</span>
			</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	.sidebar {
		position: fixed;
		width: 4.5rem;
		height: 100vh;
		list-style: none;

		top: 0;
		padding: 0.4rem 0.9rem;
		z-index: 102;
		will-change: transform;

		background: $clr-bg-3;
		transition: width 0.5s cubic-bezier(0.86, 0, 0.07, 1);
	}

	.sidebar #hamb {
		position: fixed;
		background: none;
		margin: 0;
		padding: 0;
		font-size: 1.7rem;
		left: 1.35rem;
		line-height: 4.1rem;

		color: $clr-fg-350;
		cursor: pointer;
	}

	.sidebar ul {
		height: 100%;
		display: flex;
		flex-direction: column;
		padding-block-start: 5rem;
	}

	ul li {
		height: 2.5rem;
		width: 2.5rem;
		margin-bottom: 1.2rem;
		list-style: none;
		line-height: 2.5rem;
		position: relative;

		border-radius: 1rem;
		background: linear-gradient(136.91deg, $clr-bg-3 0%, $clr-bg-350 50%, $clr-bg-3 100%);
		transition: 0.2s cubic-bezier(0.86, 0, 0.07, 1), filter 0.3s;
		transition-delay: 0.1s;
		cursor: pointer;

		:global(svg) {
			// vertically center
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			font-size: 1.3125rem;
		}

		a {
			all: unset;
			display: block;
			padding: 0rem 0.6rem 0 0.6rem;
			color: $clr-fg-350;
			white-space: nowrap;
			text-decoration: none;
			transition:.2s;
			
			
			&:active {
			transform: scale(0.98);
			} 
			
			
			
		}

		&:nth-last-child(2) {
			margin-top: auto;
		}

		@include hover {
			filter: brightness(1.2);
			transition: all 0.1s ease-in-out;
		}

		&:active {
			filter: brightness(0.9);
			
			
		}
		span {
			font-size: smaller;
			font-weight: 500;
			margin-left: 2.8rem;
			transform: scale(0) translateX(-100%);
			transform-origin: left;
			opacity: 0;
			pointer-events: none;
			transition: all 0.1s ease-in-out;
			transition-delay: 0.2s;
		}
	}

	ul li.active {
		a {
			color: $clr-fg-2;
		}

		&#home {
			background: linear-gradient(136deg, #6400ff 0%, #802bff 50%, #6400ff 100%);
		}

		&#search {
			background: linear-gradient(136deg, #ff3c00 0%, #ff6e2b 50%, #ff3c00 100%);
		}

		&#explore {
			background: linear-gradient(136deg, #F94A81 0%, #ff2ec7 50%, #F94A81 100%);
		}

		&#saved {
			background: linear-gradient(136deg, #008af9 0%, #1b98ff 50%, #008af9 100%);
		}

		&#contact {
			background: linear-gradient(136deg, #8a68e9 0%, #af71ff 50%, #995bd3 100%);
		}

		&#about {
			background: linear-gradient(136deg, #4c8077 0%, #63baab 50%, #4c8077 100%);
		}
	}

	.sidebar.open {
		width: 15rem;

		#hamb :global(svg) {
			color: $accent-0;
		}

		span {
			opacity: 1;
			transform: scale(1) translateX(0);
		}

		ul li {
			width: calc(95%);
			background: linear-gradient(90deg, $clr-bg-2 0%, rgba(63, 51, 82, 0.45) 50%, $clr-bg-2 100%);
		}

		ul li.active {
			background: $accent-1;
		}

		ul li {
			border-radius: 12px;
		}
	}

	@media only screen and (max-width: $tablet) {
		.sidebar #hamb,
		.sidebar #search,
		.sidebar #about {
			display: none;
		}

		.sidebar #contact {
			margin-top: 0;
		}

		.sidebar li {
			margin-top: 0;
		}

		.sidebar {
			top: auto;
			bottom: 0;
			width: 100vw;
			height: 4rem;
			position: fixed;

			background: $clr-bg-4;
			border-top: 1px solid $clr-fg-5;
			filter: drop-shadow(5px 5px 20px rgba(0, 0, 0, 0.37));
			padding: 0 8vw;
			overflow: hidden;
		}

		.sidebar .nav-list {
			flex-direction: row;

                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: nowrap;
                       
		        position: relative;
  

			bottom: 2.5rem;
		}

		ul li {
			display: inline;
			padding: 0 !important;
			border-radius: 0 !important;
			
			



			:global(svg) {
				font-size: 1.5rem;
			}

			background: none !important;

			position: relative;
		}
		

		
	}
</style>
