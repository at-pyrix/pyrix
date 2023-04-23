<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	let showModal = false;

	onMount(() => {
		const hasUnderstood = localStorage.getItem('hasUnderstood');
		if (!hasUnderstood)
			setTimeout(() => {
				showModal = true;
				setTimeout(() => {
					showModal = false;
				}, 10000);
			}, 4000);
	});

	function destroy() {
		showModal = false;
		localStorage.setItem('hasUnderstood', true);
	}
</script>

{#if showModal}
	<div class="modal-overlay">
		<div class="modal" transition:slide={{ duration: 200 }}>
			<div class="modal-header">
				<Icon icon="mdi:warning-octagon" />
				<h2>Heads Up</h2>
			</div>
			<div class="modal-body">
				<p>
					Apologies for interrupting. <br />
					Just a heads up: I <strong>no longer work on the developement of this site.</strong> <a href="/about">What happened?</a>
				</p>
				<p>
					The articles are mostly placeholders and AI-generated, so <strong>they may contain false information</strong>. They will be deleted however,
					once the site becomes saturated with actual content.
				</p>
				<p><strong>Thank you! and feel free to explore!</strong></p>
			</div>
			<div class="modal-footer">
				<button class="cta-btn btn" on:click={destroy}>I UNDERSTAND</button>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.modal-overlay {
		z-index: 10000;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.modal {
		position: relative;
		margin: 2rem;
		font-family: 'Larsseit', sans-serif !important;
		background-color: #1d1c29c5;
		backdrop-filter: blur(10px);
		color: #fff;
		padding: 20px;
		border-radius: 1rem;
		border: 0.1px solid $accent-0;
		text-align: center;
		max-width: 500px;
		overflow: hidden;
	}

	.modal-header {
		font-size: larger;
		margin: 1rem 0 1.5rem 0;
		text-align: center;

		:global(svg) {
			font-size: 3rem;
			margin-bottom: 1rem;
			color: $accent-0;
		}
	}

	.modal-body {
		color: $clr-fg-2;
		padding-inline: 2rem;
		margin-bottom: 20px;

		p {
			text-align: center;
			font-family: 'Larsseit', sans-serif !important;
			margin-bottom: 1rem;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}

	.modal-footer {
		display: flex;
		justify-content: flex-end;
	}

	.cta-btn {
		border: 1px solid $accent-0;
		font-style: bold;
		margin: 1rem auto;
		background: transparent;
	}

	.cta-btn:hover {
		background: $accent-0;
		color: black;
	}
</style>
