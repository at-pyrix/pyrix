<main>
	<slot />
</main>

<style lang="scss">
	@media screen and (max-width: $tablet) {
		main::before {
			background-image: radial-gradient(at 0 100%, hsla(340, 100%, 75%, 0.1) 0px, transparent 50%);
		}
	}
</style>
