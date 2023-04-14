<script>
	import { BarLoader } from 'svelte-loading-spinners';
	export let textBefore;
	export let span;
</script>

<main>
	<div class="preloader">{textBefore} <span>{span}</span></div>
	<BarLoader color="$accent-1" size="100" />
</main>

<style lang="scss">
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	main {
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 0;
		background-color: hsla(0, 100%, 50%, 0);
		background-image: radial-gradient(at 93% 100%, hsla(252, 100%, 50%, 0.5) 0px, transparent 50%),
			radial-gradient(at 5% 20%, hsla(252, 100%, 50%, 0.5) 0px, transparent 50%);
		animation: fadeIn 500ms;
		font-family: "Nofex"-95, sans-serif;
	}
	.preloader {
		text-align: center;
		font-size: 40px;
		color: #fff;

		span {
			color: $tertiary;
		}
	}
</style>
