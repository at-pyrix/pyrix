<script>
	import Icon from '@iconify/svelte';
	import Logo from '$lib/Other/logo.svelte';
	let nav;
	let hamb;
	let hambIcon = 'ic:round-menu';

	function toggleNav(e) {
		if (!hamb.classList.contains('active')) {
			nav.style.right = '0';
			hambIcon = 'ic:round-close';
			hamb.style.color = '$accent-0';
		} else {
			nav.style.right = '-100%';
			hambIcon = 'ic:round-menu';
			hamb.style.color = '#ABACD3';
		}
		hamb.classList.toggle('active');
	}
</script>

<header>
	<div class="logo">
		<a href="/">
			<Logo />
		</a>
	</div>
	<nav>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="hamb" bind:this={hamb} on:click={toggleNav}>
			<Icon icon={hambIcon} />
		</div>

		<ul class="nav-list" bind:this={nav}>
			<li>
				<a href="#hero" id="active">Home</a>
			</li>
			<li>
				<a href="/blogs">Blogs</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		z-index: 100;
		width: 100%;
		padding: 8vh 0 5vh 0;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: space-between;
	}

	ul {
		font-family: 'Poppins', sans-serif;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none;
	}

	.logo {
		z-index: 11;
		transition: 0.3s ease-in-out;

		:global(svg) {
			user-select: none;
			margin-top: 0.3rem;
			width: 13rem;
			height: auto;
			transition: 400ms;
			z-index: 1;
		}
	}

	.hamb {
		display: none;
		z-index: 5;
		font-size: 1.7rem;
		color: #adacd3;
		transition: 300ms;
		cursor: pointer;
		position: relative;
		bottom: 0.6rem;
	}

	.nav-list {
		user-select: none;
		list-style: none;
	}

	.nav-list li {
		display: inline-block;

		a {
			margin-left: 1vw;
			padding: 0.5rem 0.8rem;
			font-size: 0.94rem;
			color: #d6d6d6;
			background: rgba(255, 255, 255, 0.041);
			border-radius: 20px;
			transition: 400ms;
		}

		& a:hover {
			background: rgba(255, 255, 255, 0.1);
		}

		#active {
			color: #eee;
			outline: 2px solid #5d30ff;
		}

		#active:hover {
			background: #5d30ff;
		}
	}

	@media screen and (max-width: $tablet) {
		.hamb {
			position: relative;
			display: initial;
			z-index: 11;
		}

		.nav-list {
			position: fixed;
			top: 0;
			right: -100%;

			width: 100%;
			height: 100%;

			padding: 25vh 8%;
			background: rgba(25, 25, 37, 0.92);

			backdrop-filter: blur(10px);
			transition: 500ms right cubic-bezier(0.86, 0, 0.07, 1);
			z-index: 10;
		}

		.nav-list li {
			max-width: 30rem;
			margin: auto;
			padding: 0.5rem 0.5rem;
			display: block;
		}

		.nav-list li a {
			padding: 0.8rem 0.5rem;
			display: block;
			font-size: 1.5rem;
		}

		.nav-list li a {
			display: block;
			text-align: center;
			font-size: 1.1rem;
			font-weight: 400;
			margin-bottom: 3vh;
		}
	}
</style>
