
<main>
	<slot />
</main>

<style lang="scss">
	main::before,
	main::after {
		content: '';
		width: 50vw;
		position: fixed;
		pointer-events: none;
		height: 100vh;
		opacity: 0.5;
		z-index: 101;
		animation: growGradient 2s ease-in;
	}

	main::before {
		left: 0;
		bottom: 0;
		background-image: radial-gradient(at 45% 100%, hsla(17, 100%, 75%, 0.2) 0px, transparent 50%);
	}

	main::after {
		right: 0;
		top: 0;
		background-image: radial-gradient(at 100% 15%, hsla(22, 100%, 75%, 0.1) 0px, transparent 50%);
	}

	@keyframes growGradient {
		0% {
			opacity: 0.2;
		}
		100% {
			opacity: 0.5;
		}
	}

	@media screen and (max-width: $tablet) {
		main::before {
			background-image: radial-gradient(at 0% 100%, hsla(197, 100%, 75%, 0.1) 0px, transparent 50%);
		}
	}
</style>
