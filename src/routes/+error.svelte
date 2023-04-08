<script>
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
</script>

<svelte:head>
	<title>{$page.status} - {$page.error.message}</title>
</svelte:head>
<main>
	<section class="error-body">
		<div class="message">
			<div class="icon"><Icon icon="bx:error" /></div>
			<h1>{$page.status} - {$page.error.message} <span>x(</span></h1>
			<p>
				There was an error with the page. Please check the URL or <a href="https://github.com/NotYasho/Personal-Blog-Portfolio/issues/new" target="_"
					><strong>report a bug</strong></a
				>
			</p>
			<button class="btn btn-secondary" onclick="location.href='/blogs';">RETURN HOME</button>
		</div>
	</section>
</main>

<style lang="scss">
	main {
		height: 100vh;
		width: 100%;
		background-color: hsla(0, 100%, 50%, 0);
		background-image: radial-gradient(at 93% 100%, hsla(330, 100%, 50%, 0.2) 0px, transparent 50%);
	}

	a {
		color: $clr-secondary;
	}

	.error-body {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	.message {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: white;
	}

	.icon {
		font-size: 6.5em;
		margin-bottom: 0;
		color: $clr-secondary;
		height: 9rem;
	}

	p {
		text-align: center;
		width: 60%;
		margin-bottom: 3rem;
	}

	.message h1 {
		font-size: 2em;
		margin-bottom: 1rem;
	}

	button {
		background: none;
		border-radius: 0;
		outline: solid 1px #ff3ba7;
		border-radius: 0.4rem;
	}

	span:not(.back) {
		color: $clr-secondary;
	}
</style>
