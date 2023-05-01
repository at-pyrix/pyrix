<script>
	import { slide } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	export let message;
	export let description;
	export let show;
</script>

{#if show}
	<div class="toast" transition:slide>
		<div class="toast-content">
			<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
				<circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
				<path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
			</svg>
			<div class="message">
				<span class="text text-1">{message}</span>
				<span class="text text-2">{description}</span>
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="close">
				<Icon icon="material-symbols:close-rounded" on:click={() => (show = false)} />
			</div>
			<div class="progress" />
		</div>
	</div>
{/if}

<style lang="scss">
	.toast {
		position: fixed;
		left: 50%;
		bottom: 45px;
		transform: translateX(-50%);
		background: $clr-bg-3-glass;
		border-radius: 14px;
		border-left: 0.5rem solid $accent-0;
		padding: 1.25rem 2.18rem 1.25rem 1.56rem;
		z-index: 100;
		overflow: hidden;
		backdrop-filter: blur(10px);
		will-change: transform, bottom;
		transition: bottom 1s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.toast .toast-content {
		display: flex;
		align-items: center;
	}

	.toast .message {
		display: flex;
		flex-direction: column;
		margin: 0 1.125rem;
	}

	.toast .message .text {
		color: $clr-fg-3;
		font-weight: 400;
		font-size: clamp(0.7rem, 3vmin, 1rem);
	}

	.toast .message .text-1 {
		font-weight: 600;
		color: $clr-fg-2;
	}

	.toast .close :global(svg) {
		position: relative;
		font-size: larger;
		top: -20px;
		right: -12px;
		cursor: pointer;
		opacity: 0.7;
		transition: opacity 0.3s;
	}

	.toast .close :global(svg):hover {
		opacity: 1;
		transform: scale(1.1);
	}

	.toast .progress {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 3px;
		width: 100%;
		background: darken($accent-0, 10%);
	}

	.toast .progress::before {
		content: '';
		position: absolute;
		bottom: 0;
		right: 0;
		height: 100%;
		width: 100%;
		background: $accent-0;
	}

	.toast .progress::before {
		animation: progress 2s linear forwards;
	}

	@media all and (max-width: $tablet) {
		.toast {
			width: 88%;
			bottom: 70px;
		}
	}

	.checkmark__circle {
		stroke-dasharray: 216;
		/* ORIGINALLY 166 */
		stroke-dashoffset: 216;
		/* ORIGINALLY 166 */
		stroke-width: 2;
		stroke-miterlimit: 10;
		stroke: $accent-0;
		fill: none;
		animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
	}

	.checkmark {
		width: 48px;
		height: auto;
		border-radius: 50%;
		display: block;
		stroke-width: 2;
		stroke: #000000;
		stroke-miterlimit: 10;
		box-shadow: inset 0px 0px 0px $accent-0;
		animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
	}

	.checkmark__check {
		transform-origin: 50% 50%;
		stroke-dasharray: 98;
		/* ORIGINALLY 48 */
		stroke-dashoffset: 98;
		/* ORIGINALLY 48*/
		animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
	}

	@keyframes stroke {
		100% {
			stroke-dashoffset: 0;
		}
	}
	@keyframes scale {
		0%,
		100% {
			transform: none;
		}
		50% {
			transform: scale3d(1.1, 1.1, 1);
		}
	}
	@keyframes fill {
		100% {
			box-shadow: inset 0px 0px 0px 80px $accent-0;
		}
	}

	@keyframes progress {
		0% {
			right: 0%;
		}
		100% {
			right: 100%;
		}
	}
</style>
