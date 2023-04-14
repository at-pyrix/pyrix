<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} - {$page.error.message}</title>
</svelte:head>
<main>
	<section class="error-body">
		<div class="message">
			<img src="/img/favicon/logo.webp" alt="" />

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
		background-color: hsla(0, 100%, 50%, 0) ;
		
		background-image: radial-gradient(at 93% 100%, hsla(337, 100%, 61%, 0.1) 0px, transparent 50%);
	}

	a {
		color: $error;
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

	img {
		border-radius: 100%;
		margin-bottom: 2rem;
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
		outline: solid 1px $error;
		border-radius: 0.4rem;
	}

	span:not(.back) {
		color: $error;
	}
</style>
